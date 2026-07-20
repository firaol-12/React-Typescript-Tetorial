import Try from './components/function-component'
import Welcomes from './components/props'
import HOC from './components/HOC.tsx'
import UseState from './components/Hooks/use-state.tsx'
import UseRef from './components/Hooks/use-ref.tsx'
import NotFound from './components/notFoundPage.tsx'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './components/context/dashbord.tsx'
import { UserContext } from './components/context/about.tsx'
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
        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<UseState />} />
            <Route path='/useRef' element={<UseRef />} />
            <Route path='/try' element={<Try />} />
            <Route path='/hoc' element={<HOC />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter> */}
        <UserContext.Provider value="Fera">
            <Dashboard />
        </UserContext.Provider>
    </>
  )
}

