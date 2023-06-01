import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimeHeader } from './assets/components/AnimeHeader'
import { AnimeCard } from './assets/components/AnimeCard'

function App() {



  return (
    <>
      <AnimeHeader/>
      <AnimeCard/>
    </>
  )
}

export default App
