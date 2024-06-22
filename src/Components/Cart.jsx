import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { makePayment } from '../utils/Razopay';

const Cart = () => {
    const [total,setTotal] = useState(1);

    const handleAmountChange =()=>{
      
        makePayment(total)   
    }

    const handladd =()=>{
      setTotal(prev=>prev+100)
    }
  return (
    <div>
        {
          total
        }
        <Button border={"2px solid red"} padding={"20px 40px"} size={"400px"} onClick={handleAmountChange}>pay payment</Button>
        <Button onClick={handladd}>add amount</Button>
    </div>
  )
}

export default Cart