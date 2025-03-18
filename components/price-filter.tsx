"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface PriceFilterProps {
  minPrice: number
  onPriceChange: (min: number) => void
}

export function PriceFilter({ minPrice, onPriceChange }: PriceFilterProps) {
  const [price, setPrice] = useState<number>(minPrice)

  const handlePriceChange = (value: number[]) => {
    setPrice(value[0])
  }

  const handleApplyFilter = () => {
    onPriceChange(price)
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Price Range</h3>
      <Slider
        defaultValue={[minPrice]}
        min={0}
        max={50}
        step={1}
        value={[price]}
        onValueChange={handlePriceChange}
        className="py-4"
      />
      <div className="flex items-center justify-between">
        <span>Up to ${price}</span>
      </div>
      <Button onClick={handleApplyFilter} className="w-full">
        Apply Filter
      </Button>
    </div>
  )
}

