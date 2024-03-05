"use client"

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'


const ToggleButton = () => {

  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex w-[40px] h-[20px] rounded-[50px] cursor-pointer items-center justify-center relative dark:bg-white bg-black' onClick={toggleTheme}>
        <Image src='/moon.png' alt='moon' height={14} width={14}/>
       {theme === 'light' ? (
         <div className='w-4 h-4 rounded-[50%] bg-white absolute left-[2px]'></div>
       ) : (
        <div className='w-4 h-4 rounded-[50%] bg-black absolute right-[2px]'></div>
       )}
        <Image src='/sun.png' alt='sun' height={14} width={14}/>
    </div>
  )
}

export default ToggleButton