// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { File, Search, TextSelect, Settings, UserRound, LogOut, FileQuestionMark } from 'lucide-react'

export const SITE_TITLE = 'Muhammad Reza Ananta'
export const SITE_DESCRIPTION = 'Welcome to my portfolio website, where you can view my past projects and contact me'
export const ASCII_LOGO = `
███╗   ███╗      ██████╗ ████████╗████████╗ █████╗ 
████╗ ████║      ██╔══██╗███╔════╝╚═════██║██╔══██╗
██╔████╔██║      ██████╔╝██████╗    ████╔═╝███████║
██║╚██╔╝██║      ██╔══██╗███╔══╝  ██╔═══╝  ██╔══██║
██║ ╚═╝ ██║██╗   ██║  ██║████████╗████████╗██║  ██║
╚═╝     ╚═╝╚═╝   ╚═╝  ╚═╝╚═══════╝╚═══════╝╚═╝  ╚═╝
 █████╗ ███╗  ██╗ █████╗ ███╗  ██╗████████╗ █████╗ 
██╔══██╗████╗ ██║██╔══██╗████╗ ██║╚══██╔══╝██╔══██╗
███████║██╔██╗██║███████║██╔██╗██║   ██║   ███████║
██╔══██║██║╚████║██╔══██║██║╚████║   ██║   ██╔══██║
██║  ██║██║ ╚███║██║  ██║██║ ╚███║   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚══╝╚═╝  ╚═╝╚═╝  ╚══╝   ╚═╝   ╚═╝  ╚═╝
`.trim()

interface dashboardItemProps {
  icon: typeof IconType
  label: string
  description: string
  key: string
  path?: string
}

export const DASHBOARD_ITEMS: dashboardItemProps[] = [
  {
    icon: Search,
    label: "Find blog page",
    description: "My blog page",
    key: "f",
    path: '/blog',
  },
  {
    icon: File,
    label: "Recent Projects",
    description: "My projects list",
    key: "r",
    path: '/projects',
  },
  {
    icon: TextSelect,
    label: "Find text",
    description: "My personal knowledge repository",
    key: "g",
    path: '/brain',
  },
  {
    icon: Settings,
    label: "About Me",
    description: "My Resume and CV",
    key: "a",
    path: '/about',
  },
  {
    icon: UserRound,
    label: "Contact",
    description: "Ask me about anything! :D",
    key: "c",
    path: '/contact',
  },
  {
    icon: FileQuestionMark,
    label: "Help",
    description: "Press h to learn how to navigate",
    key: "h",
    path: '/help',
  },
  // TODO: quit with jquery
  // {
  //   icon: LogOut,
  //   label: "Quit",
  //   description: "To quit this browser tab",
  //   key: "q",
  // },
]
