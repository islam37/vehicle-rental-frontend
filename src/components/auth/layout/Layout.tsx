import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';

export default function Layout() {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line bg-paper px-6 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="font-display text-lg font-semibold text-ink">
            Vehicle Rental
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/vehicles" className="text-ink hover:text-accent-dark">
              Vehicles
            </Link>
            {isAuthenticated && (
              <Link to="/bookings" className="text-ink hover:text-accent-dark">
                My Bookings
              </Link>
            )}

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-muted">{user?.name}</span>
                <button
                  onClick={logout}
                  className="rounded-md bg-ink px-3 py-1.5 text-paper hover:bg-ink/90"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="rounded-md bg-accent px-3 py-1.5 font-medium text-ink hover:bg-accent-dark"
              >
                Log in
              </Link>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line px-6 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Vehicle Rental
      </footer>
    </div>
  );
}