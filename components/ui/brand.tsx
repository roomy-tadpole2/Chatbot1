"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      // href="https://www.chatbotui.com"
      href="https://www.nature.com/articles/s41580-024-00773-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.4} />
      </div>

      <div className="text-3xl font-bold tracking-wide">
        Piezo Knowledge base
      </div>
    </Link>
  )
}
