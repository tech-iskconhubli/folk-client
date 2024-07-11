import React, { useEffect, useState } from 'react'
import { Table,Text, TableContainer, Thead, Tbody, Tr, Th, Td, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAdminMindControlFormData, getAdminMindControlFormData } from '../../Redux/app/action';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';

const AdminMindControlDataTable = () => {
  const loading = useSelector(state=>state.AppReducer.isLoading)
  const store = useSelector((state) => state.AppReducer.adminMindControlData);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [deleteSuccess,setDeleteSuccess] = useState(false)
  useEffect(() => {
      dispatch(getAdminMindControlFormData())
      .then(res=>{
            console.log(res)
      })
  }, [dispatch,refresh]);

  const truncateDescription = (description) => {
      const words = description.split(' ');
      return words.length > 1 ? `${words[0]}...` : description;
  };

  const truncateLocation = (location) => {
      const words = location.split(' ');
      return words.length > 1 ? `${words[0]}...` : location;
  };

  const handleViewClick = (item) => {
      setSelectedItem(item);
      onOpen();
  };

  const deleteHandler = (id) => {
   // console.log(id)
    dispatch(deleteAdminMindControlFormData(id))
    .then(res=>{
        // console.log(res)
        if(res?.payload?.message === "delete success"){
            setRefresh(prev=>!prev);
            setDeleteSuccess(!deleteSuccess)
            setTimeout(() => {
             setRefresh ? setDeleteSuccess(false):setDeleteSuccess(true)
            }, 1000);
        }
    })
  }


  return (
      <>
          {loading && <KrishnaSpinner/>}


          <TableContainer bgColor={"white"}>
          {
    deleteSuccess && <Alert status='error'><AlertIcon />Deleted Success</Alert>
}
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
                          <Td pl={"30px"}></Td>
                      </Tr>
                  </Thead>
                  <Tbody fontSize={"14px"} fontWeight={"400"}>
                      {store?.map((item, index) => (
                          <Tr key={item.id}>
                              <Td>{index + 1}</Td>
                              <Td>{item.date}</Td>
                              <Td>{item.time}</Td>
                              <Td>{item.duration}</Td>
                              <Td>{truncateLocation(item.location)}</Td>
                              <Td>{truncateDescription(item.description)}</Td>
                              <Td>{item.price}</Td>
                              <Td>
                                  <Button onClick={() => handleViewClick(item)} fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button>
                              </Td>
                              <Link to={`/admin/mindControl/data/edit/${item._id}`}><Td><Button fontSize={"14px"} fontWeight={"400"} color={"blue"}>Edit</Button></Td></Link>
                              <Td><Button onClick={()=>deleteHandler(item._id)} fontSize={"14px"} fontWeight={"400"} color={"red"}>Delete</Button></Td>
                          </Tr>
                      ))}
                  </Tbody>
              </Table>
          </TableContainer>

          <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="600px" border="2px solid black" borderRadius="10px">
        <ModalHeader borderBottom="2px solid #3182CE" fontSize="24px" fontWeight="bold" color="#2B6CB0">
          Yoga Session Details
        </ModalHeader>
        <ModalCloseButton color="#2B6CB0" />
        <ModalBody>
          {selectedItem && (
            <>
              <Text fontSize="18px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0">
                <strong>Date:</strong> <span style={{ color: "gray.500" }}>{new Date(selectedItem.date).toLocaleDateString()}</span>
              </Text>
              <Text fontSize="18px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0">
                <strong>Time:</strong> <span style={{ color: "gray.500" }}>{selectedItem.time}</span>
              </Text>
              <Text fontSize="18px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0">
                <strong>Duration:</strong> <span style={{ color: "gray.500" }}>{selectedItem.duration}</span>
              </Text>
              <Text fontSize="18px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0">
                <strong>Location:</strong> <span style={{ color: "gray.500" }}>{selectedItem.location}</span>
              </Text>
              <Text fontSize="18px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0">
                <strong>Description:</strong> <span style={{ color: "gray.500" }}>{selectedItem.description}</span>
              </Text>
              <Text fontSize="18px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0">
                <strong>Price:</strong> <span style={{ color: "gray.500" }}>{selectedItem.price}</span>
              </Text>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
      </>
  );
};


export default AdminMindControlDataTable