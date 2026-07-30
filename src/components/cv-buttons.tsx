"use client"

import { useState } from "react"
import { CvModal } from "./cv-modal"

export function CvButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex gap-3">
        <a
          href="/cv-fredy-foumane.pdf"
          download="CV_Fredy_Foumane.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "oklch(0.205 0 0)",
            color: "oklch(0.985 0 0)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 1v10M4 7l4 4 4-4M2 13v1a1 1 0 001 1h10a1 1 0 001-1v-1" />
          </svg>
          Télécharger mon CV
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "#ffffff",
            color: "#171717",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 4v8a2 2 0 002 2h10a2 2 0 002-2V4M8 1v10M4 7l4 4 4-4" />
          </svg>
          Aperçu CV
        </button>
      </div>
      <CvModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
