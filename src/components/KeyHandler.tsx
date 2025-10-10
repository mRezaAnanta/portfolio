import React, { useState, useEffect } from 'react'
import Cmdline from './Cmdline.tsx'
import DashboardHandler from './DashboardHandler.tsx'

const KeyHandler: React.FC = () => {
  const [mode, setMode] = useState<'normal' | 'command'>('normal')
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (mode !== 'normal') return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case ':':
          e.preventDefault()
          setMode('command')
          break

      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode])

  return (
    <>
      <DashboardHandler mode={mode} setMode={setMode} />
      {mode === 'command' && (
        <Cmdline
          mode={mode}
          setMode={setMode}
          // onExecute={executeCommand}
        />
      )}
    </>
  )
}

export default KeyHandler
