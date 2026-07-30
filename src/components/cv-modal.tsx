"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const EASE = [0.16, 1, 0.3, 1] as const

interface CvModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  const [pdfUrl, setPdfUrl] = useState<string>("")

  useEffect(() => {
    if (!isOpen) return
    fetch("/cv-fredy-foumane.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        setPdfUrl(URL.createObjectURL(blob))
      })
    return () => {
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev)
        return ""
      })
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            className="relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 250, damping: 30, mass: 1 }}
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] shrink-0">
              <h2 className="text-base font-semibold text-white/90">Mon CV</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200 text-white/50 hover:text-white/90"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 4L4 12M4 4l8 8" />
                </svg>
              </button>
            </div>
            <div className="flex-1 bg-white">
              {pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  className="w-full h-full border-none"
                  title="CV Fredy Foumane"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  Chargement...
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
