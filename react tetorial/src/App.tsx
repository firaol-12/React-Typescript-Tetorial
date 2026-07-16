import Try from './components/function-component'
import Welcome from './components/props'
import { Welcomes } from './components/props'
import './App.css'

export default function App() {
  return (
    <>
      <Try />
      {/* <Welcome name="Firaol" />
      <Welcome name="Amar" /> */}
      <Welcomes name="Ayub" age={19} />
    </>
  )
}

