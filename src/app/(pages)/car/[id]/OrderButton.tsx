"use client"

import Loader from "@/app/components/Loader"
import { Car } from "@/app/types"
import { useState } from "react"

const OrderButton = ({ car }: { car: Car }) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        setIsLoading(true)
        fetch("http://localhost:3000/api/checkout",{
            method:"POST",
            body: JSON.stringify(car),
        })
        .then((res) => res.json())
        .then((data) => {window.location.href = data.url})
        .finally(() => setIsLoading(false))
    }
  return (
    <button
    disabled={isLoading}
    onClick={handleClick}
    className="bg-blue-500 w-full  p-2 rounded-lg text-white font-bold transition hover:bg-blue-600"
  >
    {isLoading ? <Loader/> : "Aracı Kirala"}
  </button>
  )
}

export default OrderButton