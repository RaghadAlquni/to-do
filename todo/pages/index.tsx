'use client'

import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsCircle } from "react-icons/bs";
import Box from '@mui/material/Box';
import { Button, Container, List, ListItem, TextField } from '@mui/material';

import React, {useState } from 'react';
import { todos } from "./api/tasks/todos";
import { v4 as uuid } from 'uuid'

const Home:React.FC = () => {
  const [task, setTask] = useState<string>('')
  const [newTasks, setNewTasks] = useState<todos[]>([])

  const addTasks= () => {
    setNewTasks([...newTasks, {id: uuid(), task: task, isCompelete: false}])
    setTask("");
    
  }


  const compeleteTask = (id: string) => {
    setNewTasks(newTasks.map(task => task.id === id ? {...task, isCompelete: !task.isCompelete} : task))
    
  }
  

  return (


    <>
      <Container maxWidth="sm">
        <Box style={{ position: 'relative', bottom: 295 }}
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'secondary.main',
            color: 'text.primary',
            borderRadius: 1,
            p: 1.5,
            boxShadow: 2
          }}>
          <BsCircle style={{ color: 'text.primary' , paddingRight: 7, paddingLeft: 3, fontSize: '45'}} />

          <TextField onChange={(e) => setTask(e.target.value)} 
          InputProps={{disableUnderline: true}} 
          placeholder="Create a new To Do" 
          variant="standard" 
          value={task}
          sx={{ width: '55ch', border: 0 }}
          />
          
          <Button sx={{color: 'text.primary'}} onClick={() => addTasks()}> Add Todo </Button>
        </Box>

        <Box style={{ position: 'relative', bottom: 280 }}
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'secondary.main',
            color: 'text.primary',
            borderRadius: 1,
            minHeight: '40vh',
            boxShadow: 3,
          }}>
            
            {/* <ul style={{ position: 'absolute', top: '5%', left: '5%'}}> */}
              { 
              newTasks.map(task => (

                <List>
                  <ListItem sx={{fontFamily:'Almarai' , ml: 0.2}}
                  onClick={() => compeleteTask(task.id)}
                  style = {{cursor: 'pointer' }}>
                    {task.isCompelete ? <IoMdCheckmarkCircle fontSize="large" style={{ color: 'text.primary' , paddingRight: 5, fontSize: '30'}}/> : <BsCircle style={{ color: 'text.primary' , paddingRight: 5,  fontSize: '30'}}/>} {task.task}</ListItem>
                  
                </List>

                // <li 
                // onClick={() => compeleteTask(task.id)}
                // style = {{cursor: 'pointer' }}> {task.task} </li>
              ))
              }
            {/* </ul> */}
        </Box>
      </Container>
    </>
  )
}
export default Home;
 