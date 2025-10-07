import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

const Cmdline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mode, setMode] = useState<'normal' | 'command'>('normal')
  const [cmdInput, setCmdInput] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const cmdInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (mode === 'command' && cmdInputRef.current) {
      cmdInputRef.current.focus()
    }
  }, [mode])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'normal') {
        handleNormalModeKeys(e)
      } else if (mode === 'command') {
        handleCommandModeKeys(e)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mode, cmdInput])

  const handleNormalModeKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case ':':
        e.preventDefault();
        setMode('command');
        setCmdInput('');
        break;
      default:
        console.log("default");
    }
  }

  const handleCommandModeKeys = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      setMode('normal')
      setCmdInput('')
    } else if (e.key === 'Enter') {
      e.preventDefault()
      executeCommand(commandInput);
      setMode('normal')
      setCmdInput('')
    }
  }

  const executeCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    
    if (cmd === 'q' || cmd === 'quit') {
      window.close();
    } else if (cmd === 'help') {
      setStatusMessage('Available: :q (quit), :cd <path>, :help, :ls');
    } else if (cmd.startsWith('cd ')) {
      const path = cmd.substring(3).trim();
      const validPaths = {
        '/': '/',
        'home': '/',
        '~': '/',
        'about': '/about',
        '/about': '/about',
        'projects': '/projects',
        '/projects': '/projects',
        'blog': '/blog',
        '/blog': '/blog',
        'contact': '/contact',
        '/contact': '/contact'
      };
      
      const targetPath = validPaths[path as keyof typeof validPaths];
      
      if (targetPath) {
        setStatusMessage(`Navigating to ${path}...`);
        setTimeout(() => {
          window.location.href = targetPath;
        }, 500);
      } else {
        setStatusMessage(`E: No such path: ${path}`);
      }
    } else if (cmd === 'ls') {
      setStatusMessage('Available paths: / about projects blog contact');
    } else {
      setStatusMessage(`E: Not a command: ${command}`);
    }

    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <>
      {mode === "command" && (
        <div class="absolute top-10 z-50 p-1 bg-gray-900 w-[400px]">
          <div class="relative flex flex-col items-center align-center justify-center border border-primary rounded-sm">
            <h2 class="text-primary w-fit px-3 bg-gray-900 absolute -top-3">Cmdline</h2>
            <div class="flex w-full items-center text-primary px-2">
              <ChevronRight />
              <Input 
                className="text-secondary"
                ref={cmdInputRef}
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cmdline
