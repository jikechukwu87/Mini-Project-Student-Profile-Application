import { useState } from 'react'

import './App.css'

function App() {
  
 const [student,setStudent]=useState({
  fullname:"",
  age:"",
  Student_ID:""
 })

 const [submitted,setSubmitted]=useState(false);
 const [department, setDepartment] = useState("");
 const [gender,setGender]=useState("");

 function handleChange(e){
  const {name,value}=e.target;

  setStudent({
    ...student,
    [name]:value
  })

 }

 function handlesubmit(e){
  e.preventDefault();
  console.log(student)
  setSubmitted(true)
 }

 

 

  return (
    <>
    <form onSubmit={handlesubmit}>

      <label htmlFor="fullname">Fullname</label>
      <input 
      type="text"
      onChange={handleChange}
      value={student.fullname}
      placeholder='Fullname'
      id='fullname'
      name='fullname' />

      <label htmlFor="age">Age</label>
      <input type="number"
      value={student.age} 
      onChange={handleChange}
      id='Age'
      name='age'
      placeholder='Age'/>

      <select
  value={gender}
  onChange={(event) => setGender(event.target.value)}
>
  <option value="">Select Gender</option>
  <option value="English">Male</option>
  <option value="Computer Science">Female</option>
 
</select>


      <label htmlFor="sender-id">Sender ID</label>
      <input 
      type="text"
      id='sender-id' 
      onChange={handleChange}
      placeholder='sender-id'
      value={student.Student_ID}
      name='Student_ID'/>

      <select
  value={department}
  onChange={(event) => setDepartment(event.target.value)}
>
  <option value="">Select Department</option>
  <option value="English">English</option>
  <option value="Computer Science">Computer Science</option>
  <option value="Library Science">Library Science</option>
</select>

       <button type='submit'>Save</button>
    </form>

    {submitted&&(<div>

      <p>FullName:{student.fullname}</p>
      <p>Age:{student.age}</p>
      <p>Gender:{gender}</p>
      <p>Student-ID:{student.Student_ID}</p>
      <p>Department: {department}</p>




    </div>)}
    
    </>
  )
}

export default App
