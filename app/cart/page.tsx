"use client"

import { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  category: string
  price: number
  images: string
}

export default function CartPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [cart, setCart] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    setLoading(false)
  }, [])

  const removeFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))

    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")

    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    })
  }

  const checkout = () => {
    toast({
      title: "Order confirmed",
      description: "Thank you for your purchase!",
    })

    // Clear cart after checkout
    setCart([])
    localStorage.removeItem("cart")

    // Redirect to dashboard
    router.push("/dashboard")
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  if (loading) {
    return <div className="flex items-center justify-center p-12">Loading...</div>
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {cart.length > 0 && (
          <Button variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="mt-8 rounded-lg border p-8 text-center">
          <h2 className="text-lg font-medium">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Add some wallpapers to your cart to see them here</p>
          <Button className="mt-4" onClick={() => router.push("/products")}>
            Browse Products
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
                <div className="h-16 w-16 overflow-hidden rounded-md">
                  <img
                    src={item.images || `/placeholder.svg?height=100&width=100`}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <div className="text-right">
                  <div className="font-medium">${item.price.toFixed(2)}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={checkout}>
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

