import { createContext, useContext, type ReactNode } from "react";
import data from "../data.json";
import type { AboutMe, Contact, ExperienceItem, Hero, Project } from "../types/type";

interface DataContextType {
  hero: Hero,
  aboutMe: AboutMe,
  projects: Project[],
  experience: ExperienceItem[],
  contact: Contact
}

const DataContext = createContext<DataContextType | null>(null);

interface DataContextProviderProps {
  children: ReactNode
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("El contexto no está inicializado");
  }
  return context;
}

export const DataContextProvider = ({ children }: DataContextProviderProps) => {

  const hero = data.hero;
  const aboutMe = data.aboutMe;
  const projects = data.projects as Project[];
  const experience = data.experience;
  const contact = data.contact;

  return (
    <DataContext.Provider value={{
      hero,
      aboutMe,
      projects,
      experience,
      contact
    }}>
      {children}
    </DataContext.Provider>
  )
}