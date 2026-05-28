import { useEffect, useRef, type RefObject } from "react";

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
  ignoreRef?: RefObject<HTMLElement | null>;
}

export function NavModal({ isOpen, onClose, ignoreRef }: NavModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !(ignoreRef?.current?.contains(event.target as Node))
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, ignoreRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute top-10 left-0 bg-background border border-surface rounded-md shadow-lg p-2 z-50 w-48 flex flex-col gap-1"
    >
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
    </div>
  );
}
