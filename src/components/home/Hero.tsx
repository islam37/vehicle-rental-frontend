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
      {/* Static road */}
      <line x1="20" y1="260" x2="460" y2="260" stroke="#E4E0D6" strokeWidth="2" />

      {/* Moving lane dashes — gives the illusion of the road passing under the car */}
      <line
        x1="20"
        y1="260"
        x2="460"
        y2="260"
        stroke="#12151C"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeDasharray="14 12"
        className="road-dash-fast"
      />

      {/* Motion lines behind the car */}
      <g className="motion-lines">
        <line x1="30" y1="205" x2="60" y2="205" stroke="#12151C" strokeOpacity="0.25" strokeWidth="2" />
        <line x1="20" y1="220" x2="55" y2="220" stroke="#12151C" strokeOpacity="0.2" strokeWidth="2" />
        <line x1="35" y1="235" x2="60" y2="235" stroke="#12151C" strokeOpacity="0.15" strokeWidth="2" />
      </g>

      {/* Car — bobs gently as if riding on suspension */}
      <g className="car-bob">
        {/* Lower body — amber, the one bold color in this piece */}
        <path
          d="M70 220 L100 170 Q120 150 150 150 L300 150 Q330 150 345 175 L375 220 Z"
          fill="#FFB020"
          stroke="#12151C"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Cabin / windows */}
        <path
          d="M140 150 L160 115 Q168 108 180 108 L255 108 Q268 108 276 118 L295 150 Z"
          fill="#FAF9F6"
          stroke="#12151C"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <line x1="212" y1="112" x2="212" y2="150" stroke="#12151C" strokeWidth="2" />

        {/* Door seam + handle */}
        <line x1="230" y1="152" x2="230" y2="218" stroke="#12151C" strokeOpacity="0.4" strokeWidth="1.5" />
        <rect x="245" y="178" width="14" height="4" rx="2" fill="#12151C" fillOpacity="0.6" />

        {/* Side mirror */}
        <path d="M148 148 L138 142 L140 152 Z" fill="#12151C" />

        {/* Headlight */}
        <ellipse cx="368" cy="198" rx="8" ry="6" fill="#FAF9F6" stroke="#12151C" strokeWidth="2" />
        {/* Tail light */}
        <rect x="72" y="192" width="6" height="12" rx="2" fill="#12151C" fillOpacity="0.7" />

        {/* Wheels — rotate independently, each pinned to its own hub */}
        <g className="wheel-spin" style={{ transformOrigin: '140px 222px' }}>
          <circle cx="140" cy="222" r="26" fill="#FAF9F6" stroke="#12151C" strokeWidth="3" />
          <circle cx="140" cy="222" r="8" fill="#12151C" />
          {[0, 60, 120].map((deg) => (
            <line
              key={deg}
              x1="140"
              y1="222"
              x2="140"
              y2="200"
              stroke="#12151C"
              strokeWidth="2.5"
              transform={`rotate(${deg} 140 222)`}
            />
          ))}
        </g>

        <g className="wheel-spin" style={{ transformOrigin: '330px 222px' }}>
          <circle cx="330" cy="222" r="26" fill="#FAF9F6" stroke="#12151C" strokeWidth="3" />
          <circle cx="330" cy="222" r="8" fill="#12151C" />
          {[0, 60, 120].map((deg) => (
            <line
              key={deg}
              x1="330"
              y1="222"
              x2="330"
              y2="200"
              stroke="#12151C"
              strokeWidth="2.5"
              transform={`rotate(${deg} 330 222)`}
            />
          ))}
        </g>
      </g>
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