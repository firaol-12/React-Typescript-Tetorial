import Try from './components/function-component'
import Welcomes from './components/props'
import HOC from './components/HOC.tsx'
import UseState from './components/Hooks/use-state.tsx'
import UseRef from './components/Hooks/use-ref.tsx'
import './App.css'
import type React from 'react'

export default function App() {

  function Greating(Component: React.ComponentType <{name:string}>){
    return function Enhance(){
      return(
        <>
          <h1>Hello</h1>
          <Component name="Hamza" />
          <UseState />
          <UseRef />
        </>
      )
    }
  }

  const  EnhanceGreating = Greating(HOC);
  return (
    <>
      <Try />
      <Welcomes name="Firaol" age={12} />
      <Welcomes name="Amar" age={20} />
      <Welcomes name="Ayub" age={23} />
      <EnhanceGreating />
    </>
  )
}

