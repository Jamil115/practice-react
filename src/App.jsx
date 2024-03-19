import './App.css'
import Navbar from './Components/Navbar'
import Data from './Components/Data'
import Card from './Components/Card'
import ProfileInfo from './Components/ProfileInfo'

let items = []
items = Data.map((item, index) => 
  <Card key={index}
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
