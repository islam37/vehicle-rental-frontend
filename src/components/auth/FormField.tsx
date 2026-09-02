import type { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration: any;
}

export default function FormField({ label, error, registration, ...rest }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      <input
        {...registration}
        {...rest}
        className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
      />
      {error && <p className="mt-1.5 text-sm text-error">{error}</p>}
    </div>
  );
}