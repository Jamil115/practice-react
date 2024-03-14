import './App.css'
import Navbar from './Components/Navbar'
import Data from './Components/Data'
import Card from './Components/Card'

let items = []
items = Data.map((item) => 
  <Card 
    name = {item.name}
    prof = {item.profession}
    thoughts = {item.thoughts} 
/>)


function App() {
  return (
    <>
      <Navbar></Navbar>
      {items}
    </>
  )
}

export default App
