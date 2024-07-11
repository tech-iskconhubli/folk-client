import React, { useEffect, useState } from 'react'
import { Table,Text,Flex, TableContainer,Image, Thead, Tbody, Tr, Th, Td, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminResidencyFormData, getAdminResidencyFormData } from '../../Redux/app/action';
import { Link } from 'react-router-dom';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';

const AdminResidencyDataTable = () => {
  const loading = useSelector(state=>state.AppReducer.isLoading)
    const store = useSelector((state) => state.AppReducer.adminResidencyData);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const [refresh ,setRefresh] = useState(false);
    const [deleteSuccess,setDeleteSuccess] = useState(false)

    useEffect(() => {
        dispatch(getAdminResidencyFormData());
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
       dispatch(deleteAdminResidencyFormData(id))
       .then(res=>{
           console.log(res)
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
                            
                            <Td pl={"30px"}></Td>
                        </Tr>
                    </Thead>
                    <Tbody fontSize={"14px"} fontWeight={"400"}>
                        {store?.map((item, index) => (
                            <Tr key={item.id}>
                                <Td>{index + 1}</Td>
                                <Td>{item.residencyName}</Td>
                                <Td>{item.location}</Td>
                                <Td>{item.feeAmount}</Td>
                                {/* <Td>{truncateLocation(item.availabilityStatus)}</Td> */}
                                <Td>{truncateDescription(item.description)}</Td>
                                <Td>{item.price}</Td>
                                <Td>
                                    <Button onClick={() => handleViewClick(item)} fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button>
                                </Td>
                                <Link to={`/admin/residency/data/edit/${item._id}`}><Td><Button fontSize={"14px"} fontWeight={"400"} color={"blue"}>Edit</Button></Td></Link>
                                <Td><Button onClick={()=>deleteHandler(item._id)} fontSize={"14px"} fontWeight={"400"} color={"red"}>Delete</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

            <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="700px" border="2px solid black" borderRadius="10px">
        <ModalHeader borderBottom="2px solid #3182CE" fontSize="24px" fontWeight="bold" color="#2B6CB0">
          Yoga Session Details
        </ModalHeader>
        <ModalCloseButton color="#2B6CB0" />
        <ModalBody>
          {selectedItem && (
            <>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Residency Name</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.residencyName}</Text>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Location</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.location}</Text>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Description</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.description}</Text>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Fee</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.feeAmount}</Text>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Image</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Box flex="1">
                  <Image width="150px" src={selectedItem.img} alt='image' />
                </Box>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Availability Status</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Box flex="1" color="gray">
                  {selectedItem.availabilityStatus?.map((item, index) => (
                    <ul key={index} style={{ marginLeft: "20px", listStyleType: "disc" }}>
                      <li style={{ marginBottom: "5px" }}>{item}</li>
                    </ul>
                  ))}
                </Box>
              </Flex>
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

export default AdminResidencyDataTable