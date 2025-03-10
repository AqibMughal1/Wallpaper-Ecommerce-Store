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
                        src="/placeholder.svg?height=300&width=200"
                        width={200}
                        height={300}
                        alt="Wallpaper"
                        className="aspect-[2/3] object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg?height=300&width=200"
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
                        src="/placeholder.svg?height=300&width=200"
                        width={200}
                        height={300}
                        alt="Wallpaper"
                        className="aspect-[2/3] object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg?height=300&width=200"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Categories</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We offer wallpapers for all your devices
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary-foreground"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Mobile Wallpapers</h3>
                  <p className="text-muted-foreground">Perfect for your smartphone</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary-foreground"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <line x1="12" x2="12.01" y1="18" y2="18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Tablet Wallpapers</h3>
                  <p className="text-muted-foreground">Designed for your tablet</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary-foreground"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">PC Wallpapers</h3>
                  <p className="text-muted-foreground">High resolution for your desktop</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Wallpaper Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

