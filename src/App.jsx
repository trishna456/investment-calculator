import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {

  const [investmentsValues, updateInvestmentValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = investmentsValues.duration >=1 ? true: false

  function handleChange(e){
    //console.log(e.target.name);
    updateInvestmentValues(previousValues => {
        return{
        ...previousValues,
        [e.target.name]: +[e.target.value] //unary + operator to convert strings to numbers
        }
    })
}

  return (
    <>
    <Header/>
    <UserInput investmentsValues={investmentsValues} handleChange={handleChange}/>
    {inputIsValid ? <Results investmentsValues={investmentsValues}/> : <p>Please enter a duration greater than 0</p>}
    </>
  )
}

export default App
