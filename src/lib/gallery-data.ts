export interface GalleryProject {
  id: string
  title: string
  clipCount: number
  createdAt: string
  images: string[]
  isGenerating?: boolean
  progress?: number
  eta?: string
  isFailed?: boolean
}

export const galleryProjects: GalleryProject[] = [
  {
    id: "design-1",
    title: "AfricaFreelance — Branding & Identité",
    clipCount: 6,
    createdAt: "2025-01-15",
    images: [
      "/template-designs/africafreelance.png",
      "/template-designs/africafreelance.png",
      "/template-designs/africafreelance.png",
      "/template-designs/africafreelance.png",
      "/template-designs/africafreelance.png",
    ],
  },
  {
    id: "design-2",
    title: "Test logiciel — Voix de l'Oracle",
    clipCount: 5,
    createdAt: "2024-12-10",
    images: [
      "/template-designs/design-02.jpeg",
      "/template-designs/design-03.jpeg",
      "/template-designs/design-04.jpeg",
      "/template-designs/design-05.jpeg",
      "/template-designs/design-06.jpeg",
    ],
  },
  {
    id: "design-3",
    title: "Urbania — Data & Urbanisme",
    clipCount: 8,
    createdAt: "2025-02-20",
    images: [
      "/template-designs/urbania.png",
      "/template-designs/urbania.png",
      "/template-designs/urbania.png",
      "/template-designs/urbania.png",
      "/template-designs/urbania.png",
    ],
  },
  {
    id: "design-4",
    title: "King — UI/UX Projecteur",
    clipCount: 4,
    createdAt: "2024-11-05",
    images: [
      "/template-designs/design-07.jpeg",
      "/template-designs/design-08.jpeg",
      "/template-designs/design-09.jpeg",
      "/template-designs/design-01.jpeg",
      "/template-designs/design-08.jpeg",
    ],
  },
  {
    id: "design-5",
    title: "Architecture Microservice",
    clipCount: 7,
    createdAt: "2024-09-18",
    images: [
      "/template-designs/design-02.jpeg",
      "/template-designs/design-03.jpeg",
      "/template-designs/design-04.jpeg",
      "/template-designs/design-05.jpeg",
      "/template-designs/design-06.jpeg",
    ],
  },
  {
    id: "design-6",
    title: "KAIROS-HARMONI — App Design",
    clipCount: 9,
    createdAt: "2025-03-01",
    images: [
      "/template-designs/design-07.jpeg",
      "/template-designs/design-08.jpeg",
      "/template-designs/design-09.jpeg",
      "/template-designs/design-01.jpeg",
      "/template-designs/design-02.jpeg",
    ],
  },
]
