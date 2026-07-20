import Try from './components/function-component'
import Welcomes from './components/props'
import HOC from './components/HOC.tsx'
import UseState from './components/Hooks/use-state.tsx'
import UseRef from './components/Hooks/use-ref.tsx'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {

  // function Greating(Component: React.ComponentType <{name:string}>){
  //   return function Enhance(){
  //     return(
  //       <>
  //         <h1>Hello</h1>
  //         <Component name="Hamza" />
  //         <UseState />
  //         <UseRef />
  //       </>
  //     )
  //   }
  // }

  // const  EnhanceGreating = Greating(HOC);
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UseState />} />
            <Route path='/useRef' element={<UseRef />} />
            <Route path='/try' element={<Try />} />
            <Route path='/hoc' element={<HOC />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

