"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { DATA } from "@/data/resume"

const EASE = [0.16, 1, 0.3, 1] as const

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 250, damping: 30, mass: 1 }}
            style={{
              background: "oklch(0.145 0 0)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <h2 className="text-lg font-semibold text-white">Me contacter</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200 text-white/50 hover:text-white/90"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 4L4 12M4 4l8 8" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <a
                href={`tel:${DATA.contact.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/50 mb-0.5">Téléphone</div>
                  <div className="text-white font-medium group-hover:text-emerald-400 transition-colors">{DATA.contact.tel}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-emerald-400 transition-colors shrink-0">
                  <path d="M18 8v8H8" /><path d="m22 2-8 8" /><path d="M16 2h6v6" />
                </svg>
              </a>
              <a
                href={`mailto:${DATA.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/50 mb-0.5">Email</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors truncate">{DATA.contact.email}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-blue-400 transition-colors shrink-0">
                  <path d="M18 8v8H8" /><path d="m22 2-8 8" /><path d="M16 2h6v6" />
                </svg>
              </a>
            </div>
            <div className="px-6 pb-5">
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: "oklch(0.985 0 0)",
                  color: "oklch(0.205 0 0)",
                }}
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
