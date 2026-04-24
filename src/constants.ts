import { NavItem, Vehicle, Destination, Route, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const VEHICLES: Vehicle[] = [
  {
    id: '9-seater',
    name: '9-Seater Tempo Traveller',
    seats: 9,
    description: 'Ideal for small family groups or corporate teams. Offers spacious seating and ample luggage space.',
    image: 'https://picsum.photos/seed/tempo9/800/600',
    pricePerKm: 20,
    features: ['AC', 'Pushback Seats', 'Ample Luggage space', 'Music System'],
  },
  {
    id: '12-seater',
    name: '12-Seater Tempo Traveller',
    seats: 12,
    description: 'The most popular choice for medium-sized groups. Perfect for weddings and local sightseeing.',
    image: 'https://picsum.photos/seed/tempo12/800/600',
    pricePerKm: 22,
    features: ['Luxury Interiors', 'Reclining Seats', 'High Roof', 'Deep Cooling AC'],
  },
  {
    id: '16-seater',
    name: '16-Seater Tempo Traveller',
    seats: 16,
    description: 'Designed for larger groups or school excursions. Provides extra legroom and premium facilities.',
    image: 'https://picsum.photos/seed/tempo16/800/600',
    pricePerKm: 25,
    features: ['Extra Legroom', 'Individual Charging Points', 'Premium Audio', 'Large Storage'],
  },
  {
    id: '20-seater',
    name: '20-Seater Tempo Traveller',
    seats: 20,
    description: 'Perfect for big family groups or corporate events. Cost-effective for large group transport.',
    image: 'https://picsum.photos/seed/tempo20/800/600',
    pricePerKm: 28,
    features: ['Maximum Comfort', 'Spacious Cabin', 'Professional Driver', 'Smooth Ride'],
  },
  {
    id: 'luxury',
    name: 'Luxury Tempo Traveller',
    seats: 12,
    description: 'Premium comfort with pushback seats, LED entertainment, and high-end interiors.',
    image: 'https://picsum.photos/seed/tempolux/800/600',
    pricePerKm: 30,
    features: ['Pushback Seats', 'LED TV', 'Premium Upholstery', 'Wi-Fi (on request)'],
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'golghar',
    name: 'Golghar',
    description: 'An iconic granary with a panoramic view of the Ganga river.',
    image: 'https://picsum.photos/seed/golghar/800/600',
  },
  {
    id: 'patna-museum',
    name: 'Patna Museum',
    description: 'A treasure trove of Bihar\'s rich heritage and ancient artifacts.',
    image: 'https://picsum.photos/seed/museum/800/600',
  },
  {
    id: 'mahavir-mandir',
    name: 'Mahavir Mandir',
    description: 'One of the holiest Hanuman temples in North India.',
    image: 'https://picsum.photos/seed/temple/800/600',
  },
  {
    id: 'takht-sahib',
    name: 'Takht Sri Patna Sahib',
    description: 'Sikh pilgrimage site, birthplace of Guru Gobind Singh Ji.',
    image: 'https://picsum.photos/seed/gurudwara/800/600',
  },
];

export const OUTSTATION_ROUTES: Route[] = [
  { id: 'bodhgaya', from: 'Patna', to: 'Bodh Gaya', description: 'Pilgrimage trips to the Mahabodhi Temple.' },
  { id: 'rajgir', from: 'Patna', to: 'Rajgir', description: 'Explore hot springs and historical sites.' },
  { id: 'nalanda', from: 'Patna', to: 'Nalanda', description: 'Visit the ruins of the ancient Nalanda University.' },
  { id: 'vaishali', from: 'Patna', to: 'Vaishali', description: 'Birthplace of Lord Mahavira and historical significance.' },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What types of tempo travellers are available for rent in Patna?',
    answer: 'YaYatra Travel India offers 9, 12, 16, and 20-seater vehicles. Both luxury and standard options are available.',
  },
  {
    question: 'How is the fare calculated?',
    answer: 'Fare depends on vehicle type, distance (per km), duration, and fixed charges if any. Our rates start at ₹20/km.',
  },
  {
    question: 'Are Bihar outstation trips possible?',
    answer: 'Yes, we provide luxury tempo travellers for Bodh Gaya, Rajgir, Nalanda, Vaishali, Gaya Airport, and more.',
  },
  {
    question: 'How soon should I book?',
    answer: 'We recommend booking 3-5 days in advance, especially during wedding and festival seasons.',
  },
];
