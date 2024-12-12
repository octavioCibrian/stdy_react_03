import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {

      setUserInput(prevUserInput=> {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          }
      });
  }

  return (
    <>
      <Header />
      <UserInput 
        onChangeInput={handleChange} 
        userInput={userInput}
      />
      {inputIsValid ?  <Result userInput={userInput}/> 
        : <p className="center"> Please enter a duration greather than Zero</p>
      }
   </>
  )
}

export default App
