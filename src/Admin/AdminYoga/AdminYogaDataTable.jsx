import React, { useEffect } from 'react'
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Button,Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminYogaFormData } from '../../Redux/app/action';

const AdminYogaDataTable = () => {
    const loading = false;
    const store = useSelector((state)=>state.AppReducer.adminYogaData);
    const dispatch = useDispatch()
    console.log(store);

    useEffect(()=>{
        dispatch(getAdminYogaFormData())
    },[dispatch])
  return (
    <>
    
    {loading && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={9999}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* <SyncLoader height={4} width={4} color="black" /> */}
        </Box>
      )}
    <TableContainer>
      <Table size="sm"> 
        <Thead>
          <Tr>
            <Th>S.no</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Duration</Th>
            <Th>Location</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            {/* <Td  pl={"30px"}>View</Td> */}
            <Td pl={"30px"}></Td>
          </Tr>
        </Thead>
       
        <Tbody fontSize={"14px"} fontWeight={"400"}>
          {store?.map((item,index) => (
            <Tr key={item.id}>
              <Td>{index + 1}</Td>
              <Td>{item.date}</Td>
              <Td>{item.time}</Td>
              <Td>{item.duration}</Td>
              <Td>{item.location}</Td>
              <Td>{item.description}</Td>
              <Td>{item.price}</Td>
            <Link><Td><Button fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button></Td></Link>
            <Td><Button fontSize={"14px"} fontWeight={"400"}  color={"blue"}>Edit</Button></Td>
            <Td><Button fontSize={"14px"} fontWeight={"400"}  color={"red"}>Delete</Button></Td>
            </Tr>  
          ))}
        </Tbody>
      </Table> 
    </TableContainer>
    </>
  )
}

export default AdminYogaDataTable