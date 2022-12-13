import React, { useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { hexCode } from './colors.js'

export default function Header () {
  
  const [state, setState] = useState({
    rows: 0,
    columns: 0,
    total: 1
  })


  function randomColor() {
    // Generate a random index from the hexCode array
    const randomIndex = Math.floor(Math.random() * hexCode.length);

    // Get the hex property from the object at the random index
    const color = hexCode[randomIndex].code.hex;
    console.log (color)
    return color;
  }


  function getGridSize () {
    // Calc the amount of rows and columns
    const columns = Math.floor(document.body.clientWidth / 50)
    const rows = Math.floor(document.body.clientHeight / 50)

    // Set state for the grid
    setState(prevState => ({
      rows: rows,
      columns: columns,
      total: rows * columns

    }))
    console.log("Resized")
    // Set anime properties to the grid
    anime({
      targets: '.grid-item',
      backgroundColor: randomColor(),
      duration: 0,
      easing: "linear"
    });
  }

  function handleStagger(i, randomColor, setState){
    // Set state for the grid
    setState(prevState => ({
      rows: rows,
      columns: columns,
      total: rows * columns
    }))
  
    //Find the id of tile clicked
    const el = i.target.id;
    
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(), 
      delay: anime.stagger(50, { grid: [columns, rows], from: el })
    });
  };

  window.onresize("resize", getGridSize);
  const total = (state.width * state.row)
  

  return (
    <div id='grid'>
          {[...Array(total)].map((x, i) => (
      <div
        className="grid-item"
        id={i}
        onClick={(i) => handleStagger(i)}
      />
          ))}
    </div>
  )
}

  

  