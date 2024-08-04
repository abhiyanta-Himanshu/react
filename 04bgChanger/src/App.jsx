import { useState } from 'react'


function App() {
  const [color ,setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#AA3A39'}} onClick={()=>setColor("#AA3A39")}
        >
            Medium Carmine
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#00C4D4'}} onClick={()=>setColor("#00C4D4")}
        >
            Robin's EGg Blue
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#FF983B'}} onClick={()=>setColor("#FF983B")}
        >
            Neon Carrot
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#EE5397'}} onClick={()=>setColor("#EE5397")}
        >
            Brilliant Rose
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#3466A5'}} onClick={()=>setColor("#3466A5")}
        >
            Azure
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#FE4E4E'}} onClick={()=>setColor("#FE4E4E")}
        >
            Sunset Orange
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#A8A8A8'}} onClick={()=>setColor("#A8A8A8")}
        >
            Charcol
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#C19770'}} onClick={()=>setColor("#C19770")}
        >
          Beige  
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#893f45'}} onClick={()=>setColor("#893f45")}
        >
            Cordovan
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#A18F5E'}} onClick={()=>setColor("#A18F5E")}
        >
            Khaki
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#673147'}} onClick={()=>setColor("#673147")}
        >
            Plum
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#DC143C'}} onClick={()=>setColor("#DC143C")}
        >
            Crimson
        </button>

        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:'#65000B'}} onClick={()=>setColor("#65000B")}
        >
            Rosewood
        </button>


        </div>
      </div>
     </div>
    </>
  )
}

export default App
