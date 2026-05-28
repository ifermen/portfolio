import { useRef, useState } from "react";
import burger from "../../assets/icon/burger.svg";
import { NavModal } from "./NavModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const handleBurgerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-row justify-between sm:p-5 p-3">
      <div className="flex sm:hidden relative">
        <button
          ref={burgerRef}
          onClick={handleBurgerClick}
          className="bg-transparent border-none cursor-pointer"
          aria-label="Menú de navegación"
        >
          <img src={burger} alt="Menú" className="w-8" />
        </button>
        <NavModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} ignoreRef={burgerRef} />
      </div>
      <h1 className="text-2xl">Porfolio</h1>
      <nav className="sm:flex flex-row gap-10 hidden">
        <a href="#aboutMe">
          <span className="text-text-muted font-mono transition-all duration-200 hover:text-accent-light">
            sobre mí
          </span>
        </a>
        <a href="#project">
          <span className="text-text-muted font-mono duration-200 hover:text-accent-light">
            proyectos
          </span>
        </a>
        <a href="#experience">
          <span className="text-text-muted font-mono duration-200 hover:text-accent-light">
            experiencia
          </span>
        </a>
        <a href="#contact">
          <span className="text-text-muted font-mono duration-200 hover:text-accent-light">
            contacto
          </span>
        </a>
      </nav>
      <span className="sm:hidden text-accent-light bg-[rgba(107,92,244,0.15)] flex flex-row items-center gap-2 px-3 py-0.5 w-fit rounded-full border border-accent-light/25 font-mono">
        <span className="w-3 h-3 rounded-full bg-[#6FCF97] shadow-[0_0_0_3px_rgba(111,207,151,0.2)] animate-pulse"></span>
        Open to work
      </span>
    </header>
  );
}
