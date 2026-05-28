interface LineVerticalProps {
  color?: "dark" | "normal" | "light"
}
export function LineVertical({ color = "dark" }: LineVerticalProps) {

  const colorStyle = {
    dark: "text-surface",
    normal: "text-border-light",
    light: "text-text-muted"
  }

  return (
    <div className={`border-l h-full self-stretch ${colorStyle[color]}`} />
  )
}