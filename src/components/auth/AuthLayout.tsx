import type { ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Brand panel */}
      <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-ink px-8 py-10 text-paper md:min-h-screen md:w-[42%] md:px-14 md:py-16">
        <RoutePattern />
        <div className="relative z-10">
          <span className="font-display text-lg font-semibold tracking-tight">
            Vehicle Rental
          </span>
        </div>
        <div className="relative z-10 max-w-sm">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
            Every trip starts with the right ride.
          </h1>
          <p className="mt-4 text-sm text-paper/70">
            Cars, bikes, vans and SUVs — booked in minutes, ready when you are.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 md:px-16">
        <div className="w-full max-w-sm">
          <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

function RoutePattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      viewBox="0 0 600 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M -50 700 C 150 700 100 450 300 450 C 500 450 450 200 650 200"
        stroke="#FFB020"
        strokeWidth="2"
        strokeDasharray="10 10"
        className="route-dash"
      />
      <path
        d="M -50 100 C 100 100 150 300 350 300 C 550 300 500 600 650 600"
        stroke="#FAF9F6"
        strokeOpacity="0.12"
        strokeWidth="1.5"
      />
    </svg>
  );
}