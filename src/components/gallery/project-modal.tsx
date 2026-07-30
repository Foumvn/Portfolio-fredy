"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import type { GalleryProject } from "@/lib/gallery-data"

const EASE = [0.16, 1, 0.3, 1] as const

interface ProjectModalProps {
  project: GalleryProject | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setSelectedIndex(0)
  }, [project?.id])

  useEffect(() => {
    if (!project) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i > 0 ? i - 1 : (project.images?.length || 1) - 1))
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i < (project.images?.length || 1) - 1 ? i + 1 : 0))
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  if (!project) return null

  const images = project.images || []
  const currentImage = images[selectedIndex] || ""

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: EASE }}
        onClick={handleBackdropClick}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            mass: 1,
          }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
            layoutId={`modal-${project.id}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-base font-semibold text-white/90">{project.title}</h2>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <span>{project.clipCount} visuels</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{project.createdAt}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200 text-white/50 hover:text-white/90"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 4L4 12M4 4l8 8" />
                </svg>
              </button>
            </div>

            {/* Main image area */}
            <div
              className="relative flex items-center justify-center"
              style={{
                height: "min(65vh, 600px)",
                background: "#111111",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  className="flex items-center justify-center w-full h-full p-4"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <img
                    src={currentImage}
                    alt={`${project.title} - ${selectedIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    style={{
                      boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedIndex((i) => (i > 0 ? i - 1 : images.length - 1))
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(26, 26, 26, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 3L6 9l6 6" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedIndex((i) => (i < images.length - 1 ? i + 1 : 0))
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(26, 26, 26, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                      <path d="M6 3l6 6-6 6" />
                    </svg>
                  </button>

                  {/* Counter */}
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs text-white/60"
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {selectedIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="px-5 py-4 border-t border-white/[0.06]">
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className="relative shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                      style={{
                        width: "64px",
                        height: "64px",
                        border: idx === selectedIndex ? "2px solid rgba(255,255,255,0.5)" : "2px solid transparent",
                        opacity: idx === selectedIndex ? 1 : 0.5,
                      }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
