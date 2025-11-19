import React, { useState, useEffect } from 'react'
import { DASHBOARD_ITEMS } from '@/consts.ts'

interface DashboardHandlerProps {
  mode: 'normal' | 'command'
  setMode: (mode: 'normal' | 'command') => void
}

const DashboardHandler: React.FC<DashboardHandlerProps> = ({ mode, setMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const executeAction = (item) => {
    if (item.path) {
      window.location.href = item.path
    }
  }

  const normalModeKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'j':
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % DASHBOARD_ITEMS.length)
        break

      case 'k':
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + DASHBOARD_ITEMS.length) % DASHBOARD_ITEMS.length)
        break

      case 'Enter':
        e.preventDefault();
        executeAction(DASHBOARD_ITEMS[selectedIndex])
        break;
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'normal') normalModeKeys(e)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode, selectedIndex])

  return (
    <div className="flex flex-col w-[400px] mx-auto px-3">
      {DASHBOARD_ITEMS.map((item, index) => {
        return (
          <a
            key={item.label}
            href={item.path}
            className={`flex items-center justify-between gap-x-3 p-2 cursor-pointer transition-colors duration-150 text-primary rounded-lg ${index === selectedIndex ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
          >
            <item.icon />
            <div className="flex-1">
              <span className="text-base">{item.label}</span>
              <p className="text-xs">{item.description}</p>
            </div>
            <span className="text-secondary text-base">{item.key}</span>
          </a>
        )
      })}
    </div>
  )
}

export default DashboardHandler
