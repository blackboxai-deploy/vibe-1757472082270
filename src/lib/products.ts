import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Jacket',
    description: 'Crafted from premium Italian leather, this jacket features a modern slim fit with quilted shoulders and asymmetric zip closure. Perfect for both casual and semi-formal occasions.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Outerwear',
    subcategory: 'Jackets',
    brand: 'UrbanStyle',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39bc881f-c5eb-4420-9525-6827944141f7.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1aeb6c1c-c143-4ef2-ba5e-72da8fe87ef8.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cff90e76-01da-4735-8647-53c4662ef3fa.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Navy'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
    tags: ['leather', 'premium', 'jacket', 'outerwear']
  },
  {
    id: '2',
    name: 'Designer Evening Dress',
    description: 'Elegant midi dress with sophisticated draping and subtle metallic accents. Features a flattering A-line silhouette that flows beautifully for special occasions.',
    price: 189.99,
    category: 'Dresses',
    subcategory: 'Evening',
    brand: 'LuxeFashion',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83f90f0d-6ceb-4571-9356-65136b8ff19f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9bc525f-6e4c-4ec2-974d-357f30d16b56.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e70569b6-71df-476a-ae2c-20a513f22ac5.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Burgundy', 'Emerald'],
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
    featured: true,
    tags: ['dress', 'evening', 'elegant', 'formal']
  },
  {
    id: '3',
    name: 'Classic White Sneakers',
    description: 'Timeless white leather sneakers with premium comfort cushioning and durable rubber sole. Clean minimalist design that pairs perfectly with any outfit.',
    price: 129.99,
    category: 'Footwear',
    subcategory: 'Sneakers',
    brand: 'ComfortStep',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b4aca4d-97ee-45a8-b109-788d61de6859.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81a8b931-63a5-49e3-bf05-9b8913d56f8e.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c94c275d-f0b8-4351-8f92-d9af6664c254.png'
    ],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Off-White', 'Cream'],
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    featured: false,
    tags: ['sneakers', 'casual', 'leather', 'comfortable']
  },
  {
    id: '4',
    name: 'Cashmere Blend Sweater',
    description: 'Luxuriously soft cashmere blend knit sweater with ribbed cuffs and hem. Features a relaxed fit that drapes beautifully while maintaining elegant structure.',
    price: 159.99,
    originalPrice: 199.99,
    category: 'Knitwear',
    subcategory: 'Sweaters',
    brand: 'CozyCouture',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e555dd0a-586e-4dca-86e3-52daa5786557.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0651eae-e280-4675-9bcd-8c279e52370d.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c59e2ee9-8f87-492f-b108-b232123a606b.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Charcoal', 'Cream', 'Dusty Rose'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    featured: false,
    tags: ['sweater', 'cashmere', 'knitwear', 'luxury']
  },
  {
    id: '5',
    name: 'Tailored Suit Trousers',
    description: 'Expertly tailored wool blend trousers with pressed creases and classic fit. Features side adjusters and premium lining for exceptional comfort and style.',
    price: 119.99,
    category: 'Trousers',
    subcategory: 'Formal',
    brand: 'SartorialEdge',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f72acbea-2c00-4495-9e38-f050bc8b8308.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7a9441c-8d12-47e5-8bbe-2b3dfcbd6f0c.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/71a54726-05fa-4e0f-b6e0-7e900804de38.png'
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Charcoal', 'Navy', 'Black'],
    rating: 4.5,
    reviewCount: 92,
    inStock: true,
    featured: false,
    tags: ['trousers', 'formal', 'tailored', 'wool']
  },
  {
    id: '6',
    name: 'Designer Handbag',
    description: 'Sophisticated structured handbag crafted from premium saffiano leather. Features gold-tone hardware, detachable shoulder strap, and organized interior compartments.',
    price: 249.99,
    category: 'Accessories',
    subcategory: 'Handbags',
    brand: 'LuxeCarry',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e0e95f5-6434-45a5-a3b3-54ee42dc379f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a144f632-44ed-4ee6-9c8c-d106b5e639df.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/019164e9-5ed8-44f0-bc2d-548daa54d9ff.png'
    ],
    sizes: ['One Size'],
    colors: ['Black', 'Tan', 'Burgundy'],
    rating: 4.8,
    reviewCount: 78,
    inStock: true,
    featured: true,
    tags: ['handbag', 'leather', 'designer', 'accessories']
  },
  {
    id: '7',
    name: 'Athletic Performance Shorts',
    description: 'High-performance athletic shorts with moisture-wicking fabric and four-way stretch. Features secure zip pockets and reflective details for active lifestyle.',
    price: 49.99,
    category: 'Activewear',
    subcategory: 'Shorts',
    brand: 'ActiveFit',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a93b8a42-452a-41ad-94fa-2b14d9e23dcd.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c16e34f-e25d-42f9-b591-e332c6befa7f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78f62a08-c81d-4b06-9c81-7931bd3aba59.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Charcoal', 'Olive'],
    rating: 4.4,
    reviewCount: 167,
    inStock: true,
    featured: false,
    tags: ['activewear', 'shorts', 'performance', 'athletic']
  },
  {
    id: '8',
    name: 'Vintage Denim Jacket',
    description: 'Classic denim jacket with authentic vintage wash and subtle distressing. Features traditional button closure, chest pockets, and timeless relaxed fit.',
    price: 89.99,
    originalPrice: 119.99,
    category: 'Outerwear',
    subcategory: 'Jackets',
    brand: 'RetroWave',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6cad8d97-7f11-4ce5-82b8-550dee477f2d.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af31e0d6-37a0-4482-acf1-3df12da146d1.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16bd99dc-8d44-4b6c-9c14-632f44ffa5e0.png'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Medium Blue', 'Light Blue', 'Dark Blue'],
    rating: 4.6,
    reviewCount: 134,
    inStock: true,
    featured: false,
    tags: ['denim', 'jacket', 'vintage', 'casual']
  }
];

export const categories = [
  'All',
  'Outerwear',
  'Dresses',
  'Footwear',
  'Knitwear',
  'Trousers',
  'Accessories',
  'Activewear'
];

export const brands = [
  'UrbanStyle',
  'LuxeFashion',
  'ComfortStep',
  'CozyCouture',
  'SartorialEdge',
  'LuxeCarry',
  'ActiveFit',
  'RetroWave'
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const colors = [
  'Black',
  'White',
  'Navy',
  'Brown',
  'Beige',
  'Charcoal',
  'Burgundy',
  'Emerald',
  'Cream',
  'Tan',
  'Olive'
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}