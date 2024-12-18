import { 
  Hammer, 
  Paintbrush, 
  Wrench, 
  Power, 
  Flower2,
  Lightbulb, 
  Droplets, // Changed from Shower to Droplets for bathroom category
  Armchair 
} from 'lucide-react';
import { IconType } from '../types/icon';

export interface Category {
  name: string;
  icon: IconType;
  slug: string;
}

export const categories: Category[] = [
  { name: 'Tools', icon: Hammer, slug: 'tools' },
  { name: 'Paint', icon: Paintbrush, slug: 'paint' },
  { name: 'Plumbing', icon: Wrench, slug: 'plumbing' },
  { name: 'Electrical', icon: Power, slug: 'electrical' },
  { name: 'Garden', icon: Flower2, slug: 'garden' },
  { name: 'Lighting', icon: Lightbulb, slug: 'lighting' },
  { name: 'Bathroom', icon: Droplets, slug: 'bathroom' },
  { name: 'Furniture', icon: Armchair, slug: 'furniture' }
];