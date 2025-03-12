import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <h1 className="text-2xl font-bold">Wallpaper Store</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Beautiful Wallpapers for Your Devices
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover stunning wallpapers for your mobile, tablet, and PC. Enhance your digital experience with
                    our high-quality collection.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button size="lg" variant="outline">
                      Browse Collection
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/pcsam.jpg?height=300&width=200"
                        width={200}
                        height={300}
                        alt="Wallpaper"
                        className="aspect-[2/3] object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/ipadsam.jpg?height=300&width=200"
                        width={200}
                        height={300}
                        alt="Wallpaper"
                        className="aspect-[2/3] object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/phonesam.jpg?height=300&width=200"
                        width={200}
                        height={300}
                        alt="Wallpaper"
                        className="aspect-[2/3] object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/phonesam1.jpg?height=300&width=200"
                        width={200}
                        height={300}
                        alt="Wallpaper"
                        className="aspect-[2/3] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Wallpaper Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

