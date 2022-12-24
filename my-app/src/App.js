
import React from "react";
import Header from "./Components/Header";
import Text from "./Components/text";
import Nav from "./Components/Nav";
import Email from "./Components/Email";


import './/Style.css'

function App() {
  const [state, setState] = React.useState (false)
  const toggle = () => {
    setState(prevState => !prevState)
  }






  return (
    <div className="App">
      <Email state={state} setState={setState}/>
      <Nav toggle={toggle}/>
      <Text />
      <Header />
    </div>
  );
}

export default App;
