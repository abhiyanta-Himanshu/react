import './App.css'
import { CardOne } from './components/card'

function App(props) {
  let myobj1 ={
    aboutme:"Hey My Name is Himanshu Pal"
  }
  let myobj2 ={
    aboutme:"Hey My Name is Adi Pal"
  }

  return (
    <>
      <h1>TailWind CSS + Props</h1>
      <CardOne userName="Himanshu" btnText="Contact ME" about={myobj1}/>
      <CardOne userName="Adi" about={myobj2}/>
    </>
  )
}

export default App
