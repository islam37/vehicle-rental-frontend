import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { api } from '../../lib/axios';
import { useAuthStore } from '../../store/authStore';
import { loginSchema, type LoginFormData } from '../../schemas/auth.schema';
import type { ApiResponse, User } from '../../types';
import AuthLayout from '../../components/auth/AuthLayout';
import FormField from '../../components/auth/FormField';

interface LoginResponseData {
  token: string;
  user: User;
}

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const res = await api.post<ApiResponse<LoginResponseData>>('/auth/signin', formData);
      const { token, user } = res.data.data;
      login(user, token);
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.errors || 'Login failed');
    }
  };

  return (
    <AuthLayout title="Log in" subtitle="Welcome back. Enter your details to continue.">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Email"
          type="email"
          placeholder="you@example.com"
          registration={register('email')}
          error={errors.email?.message}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="••••••••"
          registration={register('password')}
          error={errors.password?.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-md bg-accent py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark disabled:opacity-50"
        >
          {isSubmitting ? 'Logging in…' : 'Log in'}
        </button>

        <p className="mt-6 text-center text-sm text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-ink underline underline-offset-4 hover:text-accent-dark">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}