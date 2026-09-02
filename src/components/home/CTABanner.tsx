import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function CTABanner() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) return null;

  return (
    <section className="bg-ink px-6 py-16 text-paper">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Ready for your next trip?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-paper/70">
          Create a free account and book your first ride in minutes.
        </p>
        <Link
          to="/signup"
          className="mt-6 inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark"
        >
          Sign up free
        </Link>
      </div>
    </section>
  );
}