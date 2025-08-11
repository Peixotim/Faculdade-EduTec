import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obrigado! - EduTec",
  description: "Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato em breve.",
}

export default function AgradecimentoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
