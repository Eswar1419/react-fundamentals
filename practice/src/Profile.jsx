function Profile(){
    const name="eswar"
    const age=20
    const isstudent=true
    return(
        <div>
            <p>nmae:{name}</p>
            <p>age:{age}</p>
            <p>isstudent:{isstudent===true?"iam student":"i am not a student"}</p>
        </div>
    )
}
export default Profile