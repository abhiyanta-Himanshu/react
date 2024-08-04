
import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length,setLenght] = useState(8)
  const[numberAllowed,setNumberAllowed] = useState(false)
  const[characterAllowed,setCharacterAllowed] = useState(false)

  const[password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) 
      str +="0123456789"
    if(characterAllowed) 
      str +="!@#%^&*()_-/*-+`~{}[]()"

    for (let i=1 ; i<=length ; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  } , [length,setNumberAllowed,setCharacterAllowed])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  } ,[length,numberAllowed,characterAllowed,setPassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-white mb-3"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="p-3 shrink-0 text-white outline-none bg-blue-800">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
          <input
          type="range"
          min={8}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{
             setLenght(e.target.value)
          }}
          /> 
          <label className="text-lg">Length {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor="numberAllowed">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="numberInput"
            onChange={()=>{
              setCharacterAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor="characterAllowed">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
