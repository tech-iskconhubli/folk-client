import React, { useEffect, useState } from 'react'
import { Table,Text,Flex,Image, TableContainer, Thead, Tbody, Tr, Th, Td, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon } from '@chakra-ui/react';
import { deleteAdminBlogsFormData, getAdminBlogsFormData } from '../../Redux/app/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminBlogsDataTable = () => {
  const loading = false;
    const store = useSelector((state) => state.AppReducer.adminBlogsData);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const [refresh ,setRefresh] = useState(false);
    const [deleteSuccess,setDeleteSuccess] = useState(false)
    useEffect(() => {
        dispatch(getAdminBlogsFormData())
        .then(res=>{
          console.log("res",res)
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
       dispatch(deleteAdminBlogsFormData(id))
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
     console.log("refresh",refresh)
     console.log("delete", deleteSuccess)

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


            <TableContainer bgColor={"white"}>
            {
    deleteSuccess && <Alert status='error'><AlertIcon />Deleted Success</Alert>
}
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th>S.no</Th>
                            <Th>Date</Th>
                            <Th>title</Th>
                            <Th>Description</Th>
                            <Td pl={"30px"}></Td>
                        </Tr>
                    </Thead>
                    <Tbody fontSize={"14px"} fontWeight={"400"}>
                        {store?.map((item, index) => (
                            <Tr key={item.id}>
                                <Td>{index + 1}</Td>
                                <Td>{item.date}</Td>
                                <Td>{item.title}</Td> 
                                <Td>{truncateDescription(item.description)}</Td>
                  
                                <Td>
                                    <Button onClick={() => handleViewClick(item)} fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button>
                                </Td>
                                <Link to={`/admin/blogs/data/edit/${item._id}`}><Td><Button fontSize={"14px"} fontWeight={"400"} color={"blue"}>Edit</Button></Td></Link>
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
                <Text flex="0 0 200px"><strong>Blog Date</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.date}</Text>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Blog Title</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.title}</Text>
              </Flex>
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Blog Description</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Text flex="1" color="gray">{selectedItem.description}</Text>
              </Flex>
              
              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                <Text flex="0 0 200px"><strong>Image</strong></Text>
                <Text flex="0 0 20px" textAlign="center">:</Text>
                <Box flex="1">
                  <Image width="150px" src={selectedItem.img} alt='image' />
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


export default AdminBlogsDataTable