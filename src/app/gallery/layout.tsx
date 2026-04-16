"use client"

import { GenerationProvider } from "@/contexts/generation-context"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="dark"
      style={{
        ["--background" as string]: "#191919",
        ["--foreground" as string]: "#f5f5f5",
        ["--card" as string]: "#222222",
        ["--card-foreground" as string]: "#f5f5f5",
        ["--popover" as string]: "#222222",
        ["--popover-foreground" as string]: "#f5f5f5",
        ["--primary" as string]: "#f5f5f5",
        ["--primary-foreground" as string]: "#191919",
        ["--secondary" as string]: "#2a2a2a",
        ["--secondary-foreground" as string]: "#f5f5f5",
        ["--muted" as string]: "#252525",
        ["--muted-foreground" as string]: "#a1a1a1",
        ["--accent" as string]: "#2a2a2a",
        ["--accent-foreground" as string]: "#f5f5f5",
        ["--destructive" as string]: "#dc2626",
        ["--border" as string]: "#333333",
        ["--input" as string]: "#2a2a2a",
        ["--ring" as string]: "#444444",
      }}
    >
      <GenerationProvider>{children}</GenerationProvider>
    </div>
  )
}
