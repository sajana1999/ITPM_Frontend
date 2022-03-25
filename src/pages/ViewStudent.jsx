import React,{useState,useEffect} from 'react'
import { Table,Button,Icon } from 'semantic-ui-react'
import studentService from '../adapters/studentService';
import Navbar from '../components/StuNavBar'
import '../styles/student.css';

const colors = [
  
  'blue',
 
]
function ViewStudent() {
  
    const [students,setStudents]=useState([]);

    useEffect(()=>{
      studentService.getAllStudents().then((res)=>{
        setStudents(res.data);
        console.log(res.data);
      }).catch((err)=>{
        alert(err.message);
      })
    },[])

    
  return (
    <div>
       <Navbar/>
      <div className='student'>
      {colors.map((color) => (
        <Table striped id='student-table'color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>NIC</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Contact</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            
            
            <Table.Row>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>199835712696</Table.Cell>
              <Table.Cell>Male</Table.Cell>
              <Table.Cell>no 35,malabe</Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>0767985245</Table.Cell>
              <Table.Cell><Button secondary type='viewmore' size='small'>View More</Button></Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='6'>
                <Button
                  floated='right'
                  icon
                  labelPosition='left'
                  primary
                  size='small'
                >
                  <Icon name='file pdf' /> Generate Report
                </Button>
               
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      ))}
      </div>
    </div>
  )
}

export default ViewStudent