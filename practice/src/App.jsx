import Id from "./Id"


function App() {

  const Name = "K.DEVI SRI ESWAR"
  const Course = "B.TECH(CSE)"
  const Rollnumber = "24VV1A0531"
  const Bloodgroup = "o+ve"
  const DOB="06/01/2006"


  return (
    <div className="box">
      <Id Name={Name} Course={Course} Rollnumber={Rollnumber} Bloodgroup={Bloodgroup} DOB={DOB}  />
    </div>
  )
}

export default App
