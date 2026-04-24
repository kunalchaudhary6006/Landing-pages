export interface NavItem {
  label: string;
  href: string;
}

export interface Vehicle {
  id: string;
  name: string;
  seats: number;
  description: string;
  image: string;
  pricePerKm: number;
  features: string[];
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Route {
  id: string;
  from: string;
  to: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
