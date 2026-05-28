import type { ReactNode } from "react";

interface TapProps {
  style?: "active" | "muted"
  children: ReactNode
  width?: "xs" | "sm"
}
export function Tag({ style = "active", children, width = "xs" }: TapProps) {

  const styleVariant = {
    active: "bg-accent/25 border border-accent/50 whitespace-nowrap py-1 px-3 rounded-lg text-accent-light",
    muted: "bg-accent/15 border border-accent/33 whitespace-nowrap py-1 px-3 rounded-lg text-accent-light/75"
  }

  return (
    <span className={`${styleVariant[style]} text-xs sm:text-${width} font-mono`}>
      {children}
    </span>
  )
}