// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { File, Search, TextSelect, Settings, UserRound, LogOut } from 'lucide-react'

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
  },
  {
    icon: File,
    label: "Recent Projects",
    description: "My projects list",
    key: "r",
  },
  {
    icon: TextSelect,
    label: "Find text",
    description: "My personal knowledge repository",
    key: "g",
  },
  {
    icon: Settings,
    label: "About Me",
    description: "About me page",
    key: "c",
  },
  {
    icon: UserRound,
    label: "Contact",
    description: "Ask me about anything! :D",
    key: "c",
  },
  {
    icon: LogOut,
    label: "Quit",
    description: "To quit this browser tab",
    key: "q",
  },
]
