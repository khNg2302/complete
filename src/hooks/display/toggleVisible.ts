'use client'
import { useState } from "react"

export const useToggleVisible = () => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const toggle = () => {
        setOpen(!isOpen)
    }


    return {
        isOpen, toggle
    }
}