import { Link } from 'react-router-dom';
import { Car, Bike, Truck, CarFront } from 'lucide-react';
import type { VehicleType } from '../../types';

const categories: { type: VehicleType; label: string; icon: typeof Car }[] = [
  { type: 'car', label: 'Cars', icon: Car },
  { type: 'bike', label: 'Bikes', icon: Bike },
  { type: 'van', label: 'Vans', icon: Truck },
  { type: 'SUV', label: 'SUVs', icon: CarFront },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Browse by category
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map(({ type, label, icon: Icon }) => (
          <Link
            key={type}
            to={`/vehicles?type=${type}`}
            className="group flex flex-col items-start gap-4 rounded-md border border-line px-5 py-6 transition-colors hover:border-ink"
          >
            <Icon size={28} className="text-ink" strokeWidth={1.5} />
            <span className="font-medium text-ink">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}