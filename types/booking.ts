export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
  _gotcha?: string;
}

export interface BookingFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  timeSlot?: string;
  notes?: string;
  form?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
  errors?: BookingFormErrors;
}

export const BOOKING_SERVICES = [
  "Thiết kế Landing Page chuyển đổi",
  "Website Doanh nghiệp (Multi-page)",
  "Web App / Hệ thống may đo",
  "Nâng cấp & Tối ưu hiệu năng website",
] as const;

export const BOOKING_TIME_SLOTS = [
  "09:00 - 11:30 (Sáng)",
  "14:00 - 17:00 (Chiều)",
  "19:00 - 21:00 (Tối)",
] as const;
