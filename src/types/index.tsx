export type Role = 'admin' | 'customer';
export type VehicleType = 'car' | 'bike' | 'van' | 'SUV';
export type VehicleStatus = 'available' | 'booked';
export type BookingStatus = 'active' | 'cancelled' | 'returned';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: Role;
}

export interface Vehicle {
  id: number;
  vehicle_name: string;
  type: VehicleType;
  registration_number: string;
  daily_rent_price: number | string;
  availability_status: VehicleStatus;
}

export interface Booking {
  id: number;
  customer_id: number;
  vehicle_id: number;
  rent_start_date: string;
  rent_end_date: string;
  total_price: number | string;
  status: BookingStatus;
  vehicle_name?: string;
  customer_name?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  errors?: string;
}