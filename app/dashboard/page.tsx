import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Welcome to Wallpaper Store</h1>
        <p className="text-muted-foreground">Browse our collection of high-quality wallpapers for your devices</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mobile Wallpapers</CardTitle>
            <CardDescription>Perfect for your smartphone</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Mobile Wallpaper"
                className="h-full w-full object-cover"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/products/mobile" className="w-full">
              <Button className="w-full">
                Browse Mobile Wallpapers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tablet Wallpapers</CardTitle>
            <CardDescription>Designed for your tablet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Tablet Wallpaper"
                className="h-full w-full object-cover"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/products/tablet" className="w-full">
              <Button className="w-full">
                Browse Tablet Wallpapers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PC Wallpapers</CardTitle>
            <CardDescription>High resolution for your desktop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="PC Wallpaper"
                className="h-full w-full object-cover"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/products/pc" className="w-full">
              <Button className="w-full">
                Browse PC Wallpapers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Link href="/cart">
          <Button size="lg" className="gap-2">
            <ShoppingCart className="h-5 w-5" />
            View Cart
          </Button>
        </Link>
      </div>
    </div>
  )
}

