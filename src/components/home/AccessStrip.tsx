"use client";

import { useSyncExternalStore } from "react";

/**
 * Live 24-hour access strip. Shows, in Ahmedabad time, when biometric entry
 * (24/7) and the staffed front desk (6 am to 10 pm) are available, with a
 * marker for "now".
 *
 * The clock is read through useSyncExternalStore: the server snapshot is
 * `null`, so server and client markup match, then the real time appears
 * after hydration and refreshes every 30 seconds.
 */

const DESK_OPEN = 6;
const DESK_CLOSE = 22;
const TICKS = [
  { at: 0, label: "12 am" },
  { at: 6, label: "6 am" },
  { at: 12, label: "12 pm" },
  { at: 18, label: "6 pm" },
  { at: 24, label: "12 am" },
];

function minutesNowInIST(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return h * 60 + m;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

const getServerSnapshot = (): number | null => null;

function formatClock(totalMinutes: number): string {
  const h24 = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  const suffix = h24 >= 12 ? "pm" : "am";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export default function AccessStrip() {
  const minutes = useSyncExternalStore<number | null>(
    subscribe,
    minutesNowInIST,
    getServerSnapshot,
  );
  const now = minutes === null ? null : minutes / 60;
  const deskOpen = now !== null && now >= DESK_OPEN && now < DESK_CLOSE;

  const status =
    minutes === null
      ? "Biometric entry is open around the clock. The front desk is staffed from 6:00 am to 10:00 pm."
      : `It is ${formatClock(minutes)} in Ahmedabad. Biometric entry is open. ${
          deskOpen
            ? "The front desk is open until 10:00 pm."
            : "The front desk is closed until 6:00 am."
        }`;

  return (
    <div className="border border-white/20 bg-black/55 p-5 backdrop-blur-md md:p-6">
      <p className="font-body text-sm leading-relaxed text-gray-100 md:text-base" aria-live="polite">
        {status}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-[8.5rem_1fr]">
        <div className="hidden flex-col justify-between py-[3px] font-body text-xs font-semibold text-gray-200 md:flex">
          <span>Biometric entry</span>
          <span className="mt-2">Front desk</span>
        </div>

        <div className="relative">
          <div className="relative space-y-2" aria-hidden="true">
            <div className="h-2.5 bg-[#C8010A]" />
            <div className="relative h-2.5 bg-white/15">
              <div
                className="absolute inset-y-0 bg-white/85"
                style={{
                  left: `${(DESK_OPEN / 24) * 100}%`,
                  width: `${((DESK_CLOSE - DESK_OPEN) / 24) * 100}%`,
                }}
              />
            </div>
            {now !== null && (
              <div
                className="pointer-events-none absolute -bottom-1.5 -top-1.5 w-0.5 -translate-x-1/2 bg-white"
                style={{ left: `${(now / 24) * 100}%` }}
              />
            )}
          </div>

          <div className="relative mt-4 h-4" aria-hidden="true">
            {TICKS.map((t) => (
              <span
                key={t.at}
                className={`absolute whitespace-nowrap font-body text-[0.7rem] text-gray-300 ${
                  t.at === 0 ? "" : t.at === 24 ? "-translate-x-full" : "-translate-x-1/2"
                }`}
                style={{ left: `${(t.at / 24) * 100}%` }}
              >
                {t.label}
              </span>
            ))}
          </div>

          <div className="mt-3 flex gap-5 font-body text-xs text-gray-200 md:hidden">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 bg-[#C8010A]" /> Biometric entry
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 bg-white/85" /> Front desk
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 font-body text-xs leading-relaxed text-gray-300">
        Round-the-clock access is subject to facility guidelines, scheduled sanitization and
        safety audits.
      </p>
    </div>
  );
}
