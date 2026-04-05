"use client"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = "/clearchannel.html"
  }, [])
  return null
}
