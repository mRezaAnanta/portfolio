import React, { useState, useEffect } from 'react'
import { DASHBOARD_ITEMS } from '@/consts.ts'

interface DashboardHandlerProps {
  mode: 'normal' | 'command'
  setMode: (mode: 'normal' | 'command') => void
}

const DashboardHandler: React.FC<DashboardHandlerProps> = ({ mode, setMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const normalModeKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'j':
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % DASHBOARD_ITEMS.length)
        break

      case 'k':
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + DASHBOARD_ITEMS.length) % DASHBOARD_ITEMS.length)
        break
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'normal') normalModeKeys(e)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode])

  return (
    <div className="flex flex-col w-[400px] mx-auto">
      {DASHBOARD_ITEMS.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={item.label}
            className={`flex items-center justify-between gap-x-3 p-2 cursor-pointer transition-colors duration-150 ${
index === selectedIndex
? 'bg-gray-800 text-primary rounded-lg'
: 'text-primary hover:bg-gray-800 rounded-lg'
}`}
          >
            <Icon />
            <div className="flex-1">
              <span className="text-base">{item.label}</span>
              <p className="text-xs">{item.description}</p>
            </div>
            <span className="text-secondary">{item.key}</span>
          </div>
        )
      })}
    </div>
  )
}

export default DashboardHandler
