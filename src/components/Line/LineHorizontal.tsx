interface LineHorizontalProps {
  color?: "dark" | "light"
}
export function LineHorizontal({ color = "dark" }: LineHorizontalProps) {

  const colorStyle = {
    dark: "text-surface",
    light: "text-border-light"
  }

  return (
    <hr className={`border-t w-full ${colorStyle[color]}`} />
  )
}