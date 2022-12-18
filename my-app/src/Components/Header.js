import React, { useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { hexCode } from './colors.js'

export default function Header () {
  
  const [state, setState] = useState({
    rows: 0,
    columns: 0,
    total: 1
  })


  const getGridSize = () => {

    // Calc the amount of rows and columns
    const columns = Math.floor(document.documentElement.clientWidth / 50)
    const rows = Math.floor(document.documentElement.clientHeight / 50)

    console.log(columns, rows)

    // Set state for the grid
    setState(prevState => ({
      ...prevState,
      rows: rows,
      columns: columns,
      total: rows * columns

    }))

    //Pass the # of rows and columns into css
    document.body.style.setProperty('--rows', state.rows)
    document.body.style.setProperty('--columns', state.columns)

    console.log(state)

    // Set anime properties to the grid
  anime({
    targets: ".tile",
    duration: 0,
    easing: "linear"
  })
}

useEffect(() => {
  const columns = Math.floor(document.documentElement.clientWidth / 50)
  const rows = Math.floor(document.documentElement.clientHeight / 50)

  setState(prevState => ({
    ...prevState,
    rows: rows,
    columns: columns,
    total: rows * columns

  }))

  //Pass the # of rows and columns into css
  document.body.style.setProperty('--rows', rows)
  document.body.style.setProperty('--columns', columns)
  console.log(rows, columns)
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



window.onresize = getGridSize
  


  const randomColor = () => {
    // Generate a random index from the hexCode array
    const randomIndex = Math.floor(Math.random() * hexCode.length);
    // Get the hex property from the object at the random index
    const color = hexCode[randomIndex].code.hex;

    return color;
  }


  const handleStagger = (i) => {
    //Find the id of tile clicked
    const el = i.target.id;
    console.log(el)
    setState(prevState => ({
      ...prevState
    }))

    console.log("Clicked!")
    
    anime({
      targets: '.tile', 
      backgroundColor: randomColor(),
      delay: anime.stagger(25,{ grid: [state.columns, state.rows],
      from: el})
    })
  }


  return (
    <div id='tiles'>
          {([...Array(state.total)]).map((tile, i) => (
      <div
        className="tile"
        key={i}
        id={i}
        onClick={(i) => handleStagger(i)}
      />
          ))}
    </div>
  )
}

  

  