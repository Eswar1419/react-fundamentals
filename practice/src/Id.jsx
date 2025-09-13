import "./index.css"
const obj={
    color:" red "
}
function Id(id) {
    return (
        <div className="container">
            <img src="./1.jpg" alt="fdgb" className="photo" />
            <div>
                <p className="title">Name:{id.Name}</p>
                <p style={obj}>Course:{id.Course} </p>
                <p className="w">Rollnumber:{id.Rollnumber}</p>
                <p className="e">Bloodgroup{id.Bloodgroup}</p>
                <p className="r">DOB:{id.DOB}</p>
            </div>

        </div>
    )
}
export default Id