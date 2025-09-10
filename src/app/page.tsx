'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getFeaturedProducts, categories } from '@/lib/products';

// Custom icons
const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <SparklesIcon />
              <span className="ml-2">New Collection Available</span>
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Discover Your
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> 
                {' '}Perfect Style
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of premium fashion items, from elegant dresses to sophisticated outerwear. 
              Find your signature look with luxury pieces designed for the modern individual.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/products">
                  <ShoppingBagIcon />
                  <span className="ml-2">Shop Collection</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8">
                <Link href="/products?featured=true">
                  View Featured Items
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Discover our diverse range of fashion categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {categories.slice(1, 5).map((category) => (
              <Link
                key={category}
                href={`/products?category=${category}`}
                className="group relative overflow-hidden rounded-lg aspect-square bg-card border hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors" />
                <div className="relative h-full flex items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <div className="w-6 h-6 bg-primary rounded-sm" />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Collection</h2>
              <p className="text-muted-foreground text-lg">
                Handpicked premium items for discerning taste
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/products?featured=true">
                View All Featured
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay in Style</h2>
            <p className="text-muted-foreground text-lg">
              Subscribe to our newsletter for exclusive access to new collections, 
              special offers, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Top Brands</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}