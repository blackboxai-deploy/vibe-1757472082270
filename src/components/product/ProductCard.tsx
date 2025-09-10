'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
// Note: Using console.log for now instead of sonner
const toast = {
  success: (message: string) => console.log('Success:', message)
};

// Custom icons
const HeartIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg className="h-5 w-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg className="h-4 w-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Use first available size and color
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    
    addToCart(product, defaultSize, defaultColor, 1);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon key={i} filled={i < fullStars} />
      );
    }

    return stars;
  };

  return (
    <Card className="group relative overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse bg-muted-foreground/10 w-full h-full" />
              </div>
            )}
            <img
              src={product.images[0]}
              alt={product.name}
              className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMjAwSDE3NVYxNzVIMTc1VjIwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K';
                setImageLoaded(true);
              }}
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.featured && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                Sale
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
            onClick={handleWishlist}
          >
            <HeartIcon filled={isWishlisted} />
          </Button>

          {/* Quick Add to Cart (appears on hover) */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Quick Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <Link href={`/products/${product.id}`}>
          <div className="space-y-2">
            {/* Brand */}
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-0.5 text-amber-500">
                {renderStars(product.rating)}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Colors */}
            <div className="flex items-center space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-border"
                  style={{
                    backgroundColor: color.toLowerCase() === 'black' ? '#000000' :
                                   color.toLowerCase() === 'white' ? '#ffffff' :
                                   color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                   color.toLowerCase() === 'brown' ? '#92400e' :
                                   color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                   color.toLowerCase() === 'charcoal' ? '#374151' :
                                   color.toLowerCase() === 'burgundy' ? '#7c2d12' :
                                   color.toLowerCase() === 'emerald' ? '#065f46' :
                                   color.toLowerCase() === 'cream' ? '#fef7e0' :
                                   color.toLowerCase() === 'tan' ? '#d2b48c' :
                                   color.toLowerCase() === 'olive' ? '#6b7280' :
                                   '#9ca3af'
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}