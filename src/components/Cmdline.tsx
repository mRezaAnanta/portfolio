import React, { useState, useEffect, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

interface CmdLineProps {
  mode: 'normal' | 'command'
  setMode: (mode: 'normal' | 'command') => void
}

const Cmdline: React.FC<CmdLineProps> = ({ mode, setMode }) => {
  const cmdInputRef = useRef<HTMLInputElement>(null)
  const [cmdInput, setCmdInput] = useState('')
  // const [history, setHistory] = useState<string[]>([])
  // const [historyIndex, setHistoryIndex] = useState<number | null>(null)

  useEffect(() => {
    if (mode === 'command' && cmdInputRef.current) {
      cmdInputRef.current.focus()
    }
  }, [mode])

  // TODO: ability to save cmd history
  // useEffect(() => {
  //   try {
  //     const saved = localStorage.getItem('cmd_history')
  //     if (saved) {
  //       setHistory(JSON.parse(saved))
  //     }
  //   } catch (err) {
  //     console.warn('Failed to load cmd history:', err)
  //   }
  // }, [])
  //
  // // Save history to localStorage whenever it changes
  // useEffect(() => {
  //   try {
  //     localStorage.setItem('cmd_history', JSON.stringify(history))
  //   } catch (err) {
  //     console.warn('Failed to save cmd history:', err)
  //   }
  // }, [history])
  //
  // // Immediate save + execute logic
  // const executeAndSave = (comand: string) => {
  //   const trimmed = command.trim()
  //   if (!trimmed) return
  //
  //   setHistory(prev => {
  //     const updated = [...prev.filter(cmd => cmd !== trimmed), trimmed].slice(-50)
  //
  //     // 💾 Save immediately to localStorage (fixes unmount race condition)
  //     try {
  //       localStorage.setItem('cmd_history', JSON.stringify(updated))
  //     } catch (err) {
  //       console.warn('Failed to save cmd history immediately:', err)
  //     }
  //
  //     return updated
  //   })
  //
  //   console.log('Executed command:', trimmed)
  // }

  const cmdModeKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setMode('normal')
        setCmdInput('')
        // setHistoryIndex(null)
        break

      case 'Enter':
        e.preventDefault()
        // executeAndSave(cmdInput)
        setMode('normal')
        setCmdInput('')
        // setHistoryIndex(null)
        break
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'command') cmdModeKeys(e)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode, cmdInput, history, setMode])

  return (
    <div className="absolute top-10 z-50 p-1 bg-gray-900 w-[400px]">
      <div className="relative flex flex-col items-center align-center justify-center border border-primary rounded-sm">
        <h2 className="text-primary w-fit px-3 bg-gray-900 absolute -top-3">
          Cmdline
        </h2>
        <div className="flex w-full items-center text-primary px-2">
          <ChevronRight />
          <Input
            ref={cmdInputRef}
            type="text"
            value={cmdInput}
            onChange={(e) => setCmdInput(e.target.value)}
            className="text-secondary"
          />
        </div>
      </div>
    </div>
  )
}

export default Cmdline
