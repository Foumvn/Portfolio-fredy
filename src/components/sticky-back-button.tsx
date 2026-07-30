"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function StickyBackButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 120)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label="Back to Blog"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Retour au Blog
        </Link>
      </div>

      <Link
        href="/blog"
        className={`fixed top-20 left-4 sm:left-8 z-40 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 border border-border rounded-lg px-3 py-2 inline-flex items-center gap-1.5 bg-background/80 backdrop-blur-md shadow-sm ${
          show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-label="Back to Blog"
      >
        <ChevronLeft className="size-3.5" />
        Retour au Blog
      </Link>
    </>
  )
}
