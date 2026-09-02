import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="animate-hero-in">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink md:text-6xl">
            Rent the ride that fits your route.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted">
            Cars, bikes, vans and SUVs from verified owners near you. Book in minutes, pick up today.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark"
            >
              Browse vehicles
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium text-ink underline underline-offset-4 hover:text-accent-dark"
            >
              Create an account
            </Link>
          </div>
        </div>

        <div className="animate-hero-in [animation-delay:120ms]">
          <CarIllustration />
        </div>
      </div>

      <RoutePattern />
    </section>
  );
}

function CarIllustration() {
  return (
    <svg
      viewBox="0 0 480 320"
      className="mx-auto w-full max-w-md"
      fill="none"
      aria-hidden="true"
    >
      {/* Road */}
      <line x1="20" y1="260" x2="460" y2="260" stroke="#E4E0D6" strokeWidth="2" />
      <line
        x1="20"
        y1="260"
        x2="460"
        y2="260"
        stroke="#12151C"
        strokeOpacity="0.15"
        strokeWidth="2"
        strokeDasharray="14 12"
      />

      {/* Car body */}
      <path
        d="M70 220 L100 170 Q120 150 150 150 L300 150 Q330 150 345 175 L375 220 Z"
        stroke="#12151C"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M140 150 L160 115 Q168 108 180 108 L255 108 Q268 108 276 118 L295 150"
        stroke="#12151C"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="212" y1="108" x2="212" y2="150" stroke="#12151C" strokeWidth="2" />

      {/* Wheels */}
      <circle cx="140" cy="222" r="26" stroke="#12151C" strokeWidth="3" fill="#FAF9F6" />
      <circle cx="140" cy="222" r="8" fill="#FFB020" />
      <circle cx="330" cy="222" r="26" stroke="#12151C" strokeWidth="3" fill="#FAF9F6" />
      <circle cx="330" cy="222" r="8" fill="#FFB020" />

      {/* Headlight */}
      <circle cx="368" cy="200" r="6" fill="#FFB020" />
    </svg>
  );
}

function RoutePattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-40"
      viewBox="0 0 1200 200"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M -100 150 C 200 150 250 50 550 50 C 850 50 900 180 1300 180"
        stroke="#FFB020"
        strokeWidth="2"
        strokeDasharray="10 10"
        className="route-dash"
      />
    </svg>
  );
}