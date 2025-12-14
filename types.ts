export interface TravelPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  facilities: string[];
  itinerary: { day: number; title: string; desc: string }[];
  category: 'beach' | 'mountain' | 'city' | 'culture';
}

export interface BookingDetails {
  packageId: string;
  fullName: string;
  phone: string;
  email: string;
  passengers: number;
  date: string;
  specialRequest?: string;
}

export type Language = 'en' | 'id';

export interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  featuredTitle: string;
  viewAll: string;
  pricePerPerson: string;
  bookNow: string;
  checkoutButton: string;
  facilities: string;
  itinerary: string;
  duration: string;
  location: string;
  bookingTitle: string;
  stepDetails: string;
  stepSummary: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formPassengers: string;
  formDate: string;
  formSpecialRequest: string;
  summaryPackage: string;
  summaryDate: string;
  summaryPassengers: string;
  summaryTotal: string;
  confirmButton: string;
  backButton: string;
  filterAll: string;
}