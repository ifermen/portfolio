export interface Hero {
  fullName: string,
  headLine: string,
  introduction: string,
  github: string,
}

export interface AboutMe {
  headLine: string,
  content: string[],
  principalStack: string[],
  secondaryStack: string[]
}

export interface Project {
  imgKey: "GymHub" | "GymHubApi" | "MiniChef" | "Portfolio",
  title: string,
  introduction: string,
  stack: string[],
  linkDemo?: string,
  linkCode: string
}

export interface ExperienceItem {
  title: string,
  whereWhen: string,
  stack: string[],
  description: string
}

export interface Contact {
  text: string[],
  email: string,
  phone: string,
  linkedin: string,
}