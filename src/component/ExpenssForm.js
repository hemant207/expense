import React, { useState } from 'react'
import './expenssForm.css'
import axios from 'axios';


function ExpenssForm() {
  
const [expenss,setExpenss] = useState([]);

const [amount,setAmount] = useState([]);


async function HandleBtn(e){
  console.log('expenss ' + expenss);
  console.log('amount ' + amount);

  await axios.post('https://u-expensetracker.netlify.app/add_expenss', {
    expenss_name : expenss,
    amount :  amount
  }).then((res)=>{
    console.log('data set sucessfully '+ res)
  })
e.preventDefault(false);
window.location.reload();
}

  return (
    <div className='expenseform'>
    <from action='https://u-expensetracker.netlify.app/'>
    <label>Expenss Name </label>
    <input type='text' name='expense_name' onChange={(e)=>{setExpenss(e.target.value)}}></input>
    <br/>

    <label>Amount </label>
    <input type='flot' name='amount' onChange={(e)=>setAmount(e.target.value)}></input>
    <br/>

    <button className='form-btn' onClick={HandleBtn}> Submit</button>
    </from>
    </div>
  )
}

export default ExpenssForm