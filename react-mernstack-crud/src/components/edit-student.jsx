import React, {  useState,useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
 

  const EditStudent  = (props)=> {

    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rollno, setRollNo] = useState('')  

  useEffect(() => {
    
    axios.get('http://localhost:4000/students/edit-student/' + props.match.params.id)
      .then(res => {
        setName(res.data.name)
          setEmail(res.data.email)
          setRollNo(res.data.rollno)
      
      })
      .catch((error) => {
        console.log(error);
      })
  }, [1])
  
 const onChangeStudentName = (e) =>{
    setName( e.target.value )
  }

const  onChangeStudentEmail = (e)=> {
    setEmail( e.target.value )
  }

  const onChangeStudentRollno = ( e) =>{
  setRollNo(  e.target.value)
  }

  const onSubmit = ( e) =>{
    e.preventDefault()

    const studentObject = {
      name: name,
      email: email,
      rollno:rollno
    };

    axios.put('http://localhost:4000/students/update-student/' + props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    props.history.push('/student-list')
  }


    
    return (<div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={rollno} onChange={onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
export default EditStudent
