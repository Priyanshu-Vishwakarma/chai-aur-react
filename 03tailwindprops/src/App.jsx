import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='bg-green-400 text-black p-6 rounded-xl md-8' >Tailwind Test</h1>
      <Card  username="chai aur code"/>
      <Card/> 
      <Card/> 


    </>
  )
}

export default App