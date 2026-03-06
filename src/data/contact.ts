import { Mail, Phone, MapPin } from 'lucide-react';
import type { ContactInfo } from '@/types';

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: 'Email', value: 'revanthm051@gmail.com', href: 'mailto:revanthm051@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 73374 26334', href: 'tel:+91 73374 26334' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana', href: '#' },
];
