import React, { useState, useEffect } from 'react'
import Cmdline from '@/components/Cmdline.tsx'
import HelpWindows from '@/components/HelpWindows.tsx'
import DashboardHandler from '@/components/DashboardHandler.tsx'

const KeyHandler: React.FC = () => {
  const [mode, setMode] = useState<'normal' | 'command' | 'help'>('normal')
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (mode !== 'normal') return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case ':':
          e.preventDefault()
          setMode('command')
          break

        case 'h':
          e.preventDefault()
          setMode('help')
          break

      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode])

  return (
    <>
      <DashboardHandler mode={mode} setMode={setMode} client:load />
      {mode === 'command' && (
        <Cmdline
          mode={mode}
          setMode={setMode}
          // onExecute={executeCommand}
        />
      )}

      {mode === 'help' && (
        <HelpWindows
          mode={mode}
          setMode={setMode}
        />
      )}
    </>
  )
}

export default KeyHandler
