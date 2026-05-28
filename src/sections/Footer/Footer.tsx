import { Tag } from "../../components/Tag/Tag";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between p-5 items-center">
      <span className="text-text-muted font-light">2026 Iván Fernández Méndez</span>
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <span className="text-text-muted font-light">Diseñado y construido a mano</span>
        <Tag width="sm">React · Tailwind</Tag>
      </div>
    </footer>
  )
}