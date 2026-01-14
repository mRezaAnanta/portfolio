import React, { useEffect } from 'react'

interface HelpProps {
  mode: 'normal' | 'command' | 'help'
  setMode: (mode: 'normal' | 'command' | 'help') => void
}

const HelpWindows: HelpProps = ({ mode, setMode }) => {

  const helpKeys = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'q':
        e.preventDefault()
        setMode('normal')
        break
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'help') helpKeys(e)
    }

    window.addEventListener('keydown', handleKeyDown)
    console.log(mode)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode, setMode])

  return (
    <div className="absolute top-10 z-50 p-1 bg-gray-900 w-[400px]">
      <div className="relative flex flex-col pb-3 items-center align-center justify-center border border-primary rounded-sm">
        <h2 className="text-primary w-fit px-3 bg-gray-900 absolute -top-3">
          Help
        </h2>

        <div className="flex flex-col w-full text-primary px-2 pt-3">
          <h3 className="font-bold text-secondary pb-2">
            Dashboard
          </h3>
          <ul>
            <li>j/arrow down key - down</li>
            <li>k/arrow up key - up</li>
            <li>enter - change page</li>
          </ul>
        </div>

        <div className="flex flex-col w-full text-primary px-2 pt-3">
          <h3 className="font-bold text-secondary pb-2">
            Commandline
          </h3>
          <ul>
            <li>escape - close the window</li>
            <li>enter - execute the command</li>
          </ul>
        </div>

        <div className="flex flex-col w-full text-primary px-2 pt-3">
          <h3 className="font-bold text-secondary pb-2">
            Local Page
          </h3>
          <ul>
            <li>j/arrow down key - down</li>
            <li>k/arrow up key - up</li>
            <li>enter - clicking link</li>
          </ul>
        </div>

        <div className="flex flex-col w-full text-primary px-2 pt-3">
          <h3 className="font-bold text-secondary pb-2">
            Help
          </h3>
          <ul>
            <li>q - close the help window</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HelpWindows
