"use client"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  category: string
  price: number
  images: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images || `/placeholder.svg?height=300&width=300`}
            alt={product.name}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">{product.category}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => onAddToCart(product)} className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

