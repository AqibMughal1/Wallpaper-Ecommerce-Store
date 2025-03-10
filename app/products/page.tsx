"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import { ProductCard } from "@/components/product-card"
import { PriceFilter } from "@/components/price-filter"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  category: string
  price: number
  images: string
}

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<Product[]>([])

  const category = searchParams.get("category")

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }

    fetchProducts()
  }, [category])

  const fetchProducts = async (minPrice?: number, maxPrice?: number) => {
    setLoading(true)
    try {
      let url = "/api/products"
      const params = new URLSearchParams()

      if (category) {
        params.append("category", category)
      }

      if (minPrice !== undefined) {
        params.append("minPrice", minPrice.toString())
      }

      if (maxPrice !== undefined) {
        params.append("maxPrice", maxPrice.toString())
      }

      if (params.toString()) {
        url += `?${params.toString()}`
      }

      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handlePriceChange = (min: number, max: number) => {
    fetchProducts(min, max)
  }

  const addToCart = (product: Product) => {
    const newCart = [...cart, product]
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold">Filters</h2>
          <PriceFilter minPrice={0} maxPrice={100} onPriceChange={handlePriceChange} />
        </div>
      </div>
      <div className="md:col-span-3">
        <h1 className="mb-6 text-2xl font-bold">{category ? `${category} Wallpapers` : "All Wallpapers"}</h1>
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted"></div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-lg border p-8 text-center">
            <h2 className="text-lg font-medium">No products found</h2>
            <p className="mt-2 text-muted-foreground">Try adjusting your filters or check back later</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

