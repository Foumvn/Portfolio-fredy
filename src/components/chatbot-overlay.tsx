"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import Markdown from "react-markdown"
import { DATA } from "@/data/resume"

const EASE = [0.16, 1, 0.3, 1] as const

const ENCODED_KEY = "U0B9WENGe2dbZkJhbRtbZGBFfG9Mf0JaUBtafUdiTmY="
const XOR_SHIFT = 42

function decodeKey(encoded: string, shift: number): string {
  const xored = atob(encoded)
  const reversed = xored.split("").map((c) => String.fromCharCode(c.charCodeAt(0) ^ shift)).join("")
  return reversed.split("").reverse().join("")
}

const MISTRAL_API_KEY = decodeKey(ENCODED_KEY, XOR_SHIFT)

const SYSTEM_PROMPT = `Tu es un assistant IA qui aide les visiteurs du portfolio de Fredy Foumane. Voici les informations que tu dois connaître :

IDENTITÉ :
- Nom : Fredy Foumane
- Titre : Fullstack Developer & Mobile Architect
- Localisation : Odza, Yaoundé, Cameroon
- Email : fredyfoumvn237@gmail.com
- Téléphone : +237 657 933 330
- GitHub : https://github.com/Foumvn
- LinkedIn : https://www.linkedin.com/in/fred-foumane-712a7827b/

EXPÉRIENCE PROFESSIONNELLE :
1. Athari (Juin 2026 - Présent) : Fullstack Developer & Mobile Architect
2. Kairos (Fév 2025 - Jan 2026) : Fullstack Developer & Mobile Architect
3. CS-Technology Agency (Fév 2024 - Mar 2025) : Fullstack Developer & Designer
4. Care and Health Program CHP (2023 - 2024) : Dev Fullstack & Intégrateur

COMPÉTENCES TECHNIQUES :
Java, Spring Boot, Flutter, Angular, Next.js, Laravel, Node.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, Firebase

PROJETS :
- KAIROS-HARMONI : App mobile Flutter
- AfricaFreelance : Plateforme freelance
- WithIn (Dreamflow) : Messagerie entreprise
- Urbania : Data & Urbanisme
- King : UI/UX Projecteur
- ChairRemote : IoT & Interface

ÉDUCATION :
- Ekounou Bilingual High School (2024 - 2026)
- Complexe Scolaire le Papillon (2018 - 2024)

LANGUES : Français, Anglais

Réponds de manière concise et amicale en français. Donne les informations demandées avec précision et n'invente rien. Si tu ne sais pas, dis-le honnêtement.`

interface Message {
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Salut je suis Zfred l'assistant IA de Fredy Foumane",
}

export function ChatbotOverlay() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMsg: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(1).map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userMsg.content },
          ],
          temperature: 0.7,
          max_tokens: 512,
        }),
      })

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu répondre."

      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Désolé, je rencontre un problème technique. Réessaie plus tard !" },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [input, isLoading, messages])

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 sm:bottom-8 right-4 sm:right-8 z-[150] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
        style={{
          background: "oklch(0.145 0 0)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        aria-label="Ouvrir le chat IA"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Chat panel */}
            <motion.div
              className="relative w-full sm:max-w-lg sm:h-[600px] h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden min-w-0"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 30, mass: 1 }}
              style={{
                background: "oklch(0.145 0 0)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                      <path d="M16 14H8a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Zfred</div>
                    <div className="text-[11px] text-white/40">IA • Portfolio</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white/90"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 4L4 12M4 4l8 8" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 scroll-smooth">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed prose prose-invert prose-sm prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-strong:text-white ${
                        msg.role === "user"
                          ? "bg-white/10 text-white rounded-br-md"
                          : "bg-white/[0.04] text-white/80 rounded-bl-md"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <Markdown>{msg.content}</Markdown>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/[0.04] rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-white/[0.06] px-3 sm:px-5 py-4 shrink-0 min-w-0">
                <form onSubmit={handleSubmit} className="flex gap-2 min-w-0">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pose-moi une question..."
                    className="flex-1 min-w-0 bg-white/[0.06] text-white text-sm rounded-xl px-4 sm:px-4 py-3 sm:py-2.5 outline-none placeholder:text-white/30 border border-white/[0.06] focus:border-white/20 transition-colors"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-12 h-12 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 disabled:opacity-30"
                    style={{
                      background: !input.trim() || isLoading ? "oklch(0.3 0 0)" : "oklch(0.985 0 0)",
                      color: "oklch(0.205 0 0)",
                    }}
                  >
                    <svg width="20" height="20" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
