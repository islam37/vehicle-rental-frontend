import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { api } from '../../lib/axios';
import { signupSchema, type SignupFormData } from '../../schemas/auth.schema';
import type { ApiResponse, User } from '../../types';
import AuthLayout from '../../components/auth/AuthLayout';
import FormField from '../../components/auth/FormField';

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { role: 'customer' },
  });

  const onSubmit = async (formData: SignupFormData) => {
    try {
      await api.post<ApiResponse<User>>('/auth/signup', formData);
      toast.success('Account created. Please log in.');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.response?.data?.errors || 'Registration failed');
    }
  };

  return (
    <AuthLayout title="Create account" subtitle="Set up your account to start renting.">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Full name"
          type="text"
          placeholder="John Doe"
          registration={register('name')}
          error={errors.name?.message}
        />
        <FormField
          label="Email"
          type="email"
          placeholder="you@example.com"
          registration={register('email')}
          error={errors.email?.message}
        />
        <FormField
          label="Phone"
          type="tel"
          placeholder="01XXXXXXXXX"
          registration={register('phone')}
          error={errors.phone?.message}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="At least 6 characters"
          registration={register('password')}
          error={errors.password?.message}
        />

        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-ink">Account type</label>
          <select
            {...register('role')}
            className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-md bg-accent py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark disabled:opacity-50"
        >
          {isSubmitting ? 'Creating account…' : 'Sign up'}
        </button>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-ink underline underline-offset-4 hover:text-accent-dark">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}