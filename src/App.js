import React, {useState} from 'react';
import goku from './components/img/goku.png'
import sgoku from './components/img/sgoku.png'

import Cab from './components/Header'

export default function App() {

  const [hiper, setHiper]=useState(false)

  return (
    <>
      <Cab/>
      <h1>Goku</h1>
      <img style={{width:'18%'}} src={hiper?sgoku:goku}/>
      <button onClick={()=>setHiper(!hiper)}>{hiper?'super-sayajin':'sayajin'}</button>

    </>
  )
}