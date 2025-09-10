'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ProductGrid } from '@/components/product/ProductGrid';
import { products, categories, brands, colors, sizes } from '@/lib/products';
import { SortOption } from '@/lib/types';

// Custom icons
const FilterIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Price filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return b.reviewCount - a.reviewCount;
        case 'newest':
        default:
          return 0; // Keep original order for newest
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrands, selectedColors, selectedSizes, priceRange, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 500]);
    setSortBy('newest');
  };

  const hasActiveFilters = 
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedBrands.length > 0 ||
    selectedColors.length > 0 ||
    selectedSizes.length > 0 ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 500;

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Search Products</label>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Category</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Brands */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Brands</label>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedBrands([...selectedBrands, brand]);
                  } else {
                    setSelectedBrands(selectedBrands.filter(b => b !== brand));
                  }
                }}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Colors</label>
        <div className="grid grid-cols-3 gap-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={selectedColors.includes(color)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedColors([...selectedColors, color]);
                  } else {
                    setSelectedColors(selectedColors.filter(c => c !== color));
                  }
                }}
              />
              <label
                htmlFor={`color-${color}`}
                className="text-xs cursor-pointer"
              >
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Sizes</label>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                checked={selectedSizes.includes(size)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedSizes([...selectedSizes, size]);
                  } else {
                    setSelectedSizes(selectedSizes.filter(s => s !== size));
                  }
                }}
              />
              <label
                htmlFor={`size-${size}`}
                className="text-xs cursor-pointer"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearAllFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold">All Products</h1>
        <p className="text-muted-foreground text-lg">
          Discover our complete collection of premium fashion items
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters */}
        <aside className="hidden lg:block w-64 space-y-6">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <FilterSection />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <FilterIcon />
                    <span className="ml-2">Filters</span>
                    {hasActiveFilters && (
                      <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        !
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSection />
                  </div>
                </SheetContent>
              </Sheet>

              <span className="text-sm text-muted-foreground">
                {filteredAndSortedProducts.length} products found
              </span>
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-sm font-medium">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery('')}>
                    <XIcon />
                  </button>
                </Badge>
              )}
              {selectedCategory !== 'All' && (
                <Badge variant="secondary" className="gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')}>
                    <XIcon />
                  </button>
                </Badge>
              )}
              {selectedBrands.map((brand) => (
                <Badge key={brand} variant="secondary" className="gap-1">
                  {brand}
                  <button onClick={() => setSelectedBrands(selectedBrands.filter(b => b !== brand))}>
                    <XIcon />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Products Grid */}
          <ProductGrid products={filteredAndSortedProducts} />
        </main>
      </div>
    </div>
  );
}