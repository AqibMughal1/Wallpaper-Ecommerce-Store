"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface PriceFilterProps {
  minPrice: number
  maxPrice: number
  onPriceChange: (min: number, max: number) => void
}

export function PriceFilter({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
  }

  const handleApplyFilter = () => {
    onPriceChange(priceRange[0], priceRange[1])
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Price Range</h3>
      <Slider
        defaultValue={[minPrice, maxPrice]}
        min={0}
        max={100}
        step={1}
        value={[priceRange[0], priceRange[1]]}
        onValueChange={handlePriceChange}
        className="py-4"
      />
      <div className="flex items-center justify-between">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
      <Button onClick={handleApplyFilter} className="w-full">
        Apply Filter
      </Button>
    </div>
  )
}

