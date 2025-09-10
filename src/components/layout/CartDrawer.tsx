'use client';

import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

// Custom icons
const MinusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const TrashIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice,
    getTotalItems 
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart</span>
            {totalItems > 0 && (
              <Badge variant="secondary">
                {totalItems} item{totalItems !== 1 ? 's' : ''}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                  <svg className="h-12 w-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground">
                    Add some items to get started
                  </p>
                </div>
                <Button asChild onClick={() => setIsCartOpen(false)}>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 py-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNC4yNSAzMi4yNUgzMi4yNVYyNC4yNUgyNC4yNVYzMi4yNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K';
                        }}
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-medium leading-none">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Size: {item.size} • Color: {item.color}
                      </p>
                      <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <MinusIcon />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusIcon />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-4 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                      Checkout
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    asChild
                    onClick={() => setIsCartOpen(false)}
                  >
                    <Link href="/cart">View Cart</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}