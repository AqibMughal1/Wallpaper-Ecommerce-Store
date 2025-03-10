import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")

    const whereClause: any = {}

    if (category) {
      whereClause.category = category
    }

    if (minPrice || maxPrice) {
      whereClause.price = {}

      if (minPrice) {
        whereClause.price.gte = Number.parseFloat(minPrice)
      }

      if (maxPrice) {
        whereClause.price.lte = Number.parseFloat(maxPrice)
      }
    }

    const products = await prisma.product.findMany({
      where: whereClause,
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, category, price, images } = body

    const product = await prisma.product.create({
      data: {
        name,
        category,
        price,
        images,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

