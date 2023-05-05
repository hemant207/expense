import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ExpenssData.css';
import { Card } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function ExpenssData() {
    const [data,setData] = useState([]);

    const [expenss_name,setExpenss_name] = useState();
    const [amount,setAmount] = useState();

    useEffect(()=>{
        async function fetchData(){
          await axios.get('https://u-expensetracker.netlify.app/').then((res)=>{
            setData(res.data)
          })
        }fetchData();
      },[])

      async function handleDelete(id){
        console.log(id);

        await axios.delete('https://u-expensetracker.netlify.app/remove_expenss',{
          data: { expenss_id:id  }
        })
        window.location.reload();
      }


  return (
    <>
    <div className='contaier'>
    {data.map(data => ( 
      
        <div className='expenss'>
            <Card className='expenss-data'>
           <Card.Title className='d'>Expense name : {data.expenss_name}</Card.Title>
            <Card.Text className='d'>Amount : {data.amount}</Card.Text>

            <div className='data-btn'>
            <button className='delete-btn' onClick={()=>handleDelete(data.expenss_id)}><AiFillDelete/> Delete</button>
            
         
            </div>
        </Card>
        </div>
        
    ))}
    </div>
    </>
  )
}

export default ExpenssData