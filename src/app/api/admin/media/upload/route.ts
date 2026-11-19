import { NextRequest, NextResponse } from "next/server";
import { isMediaAdminRequest, sameOrigin } from "@/lib/media-auth";
import { uploadDraft } from "@/lib/cloudinary-media";
import { isMediaSlot } from "@/lib/media-slots";

export const runtime = "nodejs";
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export async function POST(request: NextRequest) {
  if (!isMediaAdminRequest(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_UPLOAD_BYTES + 4096) {
    return NextResponse.json({ error: "Image exceeds 10 MB." }, { status: 413 });
  }
  let data: FormData;
  try { data = await request.formData(); } catch {
    return NextResponse.json({ error: "Invalid image upload." }, { status: 400 });
  }
  const slot = data.get("slot");
  const file = data.get("image");
  if (!isMediaSlot(slot) || !(file instanceof File)) {
    return NextResponse.json({ error: "Select an image and a valid website section." }, { status: 400 });
  }
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
      file.size < 1024 || file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "Use a JPG, PNG or WebP image between 1 KB and 10 MB." }, { status: 400 });
  }
  // Basic file signature validation to reject obvious non-image uploads.
  const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const jpeg = bytes[0] === 0xFF && bytes[1] === 0xD8;
  const png = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47;
  const webp = String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
    String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
  if ((file.type === "image/jpeg" && !jpeg) ||
      (file.type === "image/png" && !png) ||
      (file.type === "image/webp" && !webp)) {
    return NextResponse.json({ error: "File content does not match the image format." }, { status: 400 });
  }
  try {
    const image = await uploadDraft(slot, file);
    return NextResponse.json({ image }, { headers: { "Cache-Control": "no-store" } });
  } catch (error: unknown) {
    console.error("Media upload failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Upload failed. Please check Cloudinary settings." }, { status: 502 });
  }
}
