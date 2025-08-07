import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 1299,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy'],
    description: 'Comfortable premium cotton t-shirt perfect for everyday wear.',
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Casual Denim Jacket',
    price: 2499,
    originalPrice: 3299,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    description: 'Classic denim jacket with modern fit and premium finish.',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Formal White Shirt',
    price: 1799,
    originalPrice: 2399,
    image: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue'],
    description: 'Crisp formal shirt perfect for office and special occasions.',
    rating: 4.6,
    reviews: 156
  },
  {
    id: '4',
    name: 'Slim Fit Chinos',
    price: 1899,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Pants',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Black'],
    description: 'Versatile slim fit chinos for smart casual occasions.',
    rating: 4.4,
    reviews: 203
  },
  {
    id: '5',
    name: 'Hooded Sweatshirt',
    price: 2199,
    originalPrice: 2899,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Black', 'Maroon'],
    description: 'Cozy hooded sweatshirt with soft fleece lining.',
    rating: 4.8,
    reviews: 94
  },
  {
    id: '6',
    name: 'Polo Neck T-Shirt',
    price: 1599,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'White', 'Gray'],
    description: 'Classic polo neck t-shirt with premium cotton blend.',
    rating: 4.3,
    reviews: 67
  }
];

export const categories = ['All', 'T-Shirts', 'Shirts', 'Jackets', 'Pants', 'Hoodies'];