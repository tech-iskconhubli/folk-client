import React, { useEffect, useState } from 'react'
import { Table,Text, TableContainer, Thead, Tbody, Tr, Th, Td, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon } from '@chakra-ui/react';
import { deleteAdminFestivalsFormData, getAdminFestivalsFormData } from '../../Redux/app/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminFestivalsDateTable = () => {
  const loading = false;
    const store = useSelector((state) => state.AppReducer.adminFestivals);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const [refresh ,setRefresh] = useState(false)
    const [deleteSuccess,setDeleteSuccess] = useState(false)
    useEffect(() => {
        dispatch(getAdminFestivalsFormData())
        .then(res=>{
          if(res?.payload?.message === "delete success"){
            setRefresh(prev=>!prev);
            setDeleteSuccess(!deleteSuccess)
            setTimeout(() => {
             setRefresh ? setDeleteSuccess(false):setDeleteSuccess(true)
            }, 1000);
        }
        })
    }, [dispatch,refresh]);

    const truncateDescription = (description) => {
        const words = description?.split(' ');
        return words?.length > 1 ? `${words[0]}...` : description;
    };

    // const truncateLocation = (location) => {
    //     const words = location.split(' ');
    //     return words.length > 1 ? `${words[0]}...` : location;
    // };

    const handleViewClick = (item) => {
        setSelectedItem(item);
        onOpen();
    };

    const deleteHandler = (id) => {
      // console.log(id)
       dispatch(deleteAdminFestivalsFormData(id))
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

     console.log("store",store)

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

{
    deleteSuccess && <Alert status='error'><AlertIcon />Deleted Success</Alert>
}
            <TableContainer bgColor={"white"} >
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th>S.no</Th>
                            <Th>title</Th>
                            {/* <Th>From</Th>
                            <Th>To</Th> */}
                            <Th>From Date</Th>
                            <Th>To Date</Th>
                            <Th>Description</Th>
                           
                            <Td pl={"30px"}></Td>
                        </Tr>
                    </Thead>
                    <Tbody fontSize={"14px"} fontWeight={"400"}>
                        {store?.map((item, index) => (
                            <Tr key={item.id}>
                                <Td>{index + 1}</Td>
                                <Td>{item.title}</Td>
                                {/* <Td>{item.from}</Td>
                                <Td>{item.to}</Td> */}
                                <Td>{item.fromDate}</Td>
                                <Td>{item.toDate}</Td>
                                {/* <Td>{truncateLocation(item.availabilityStatus)}</Td> */}
                                <Td>{truncateDescription(item.description)}</Td>
                                <Td>{item.price}</Td>
                                <Td>
                                    <Button onClick={() => handleViewClick(item)} fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button>
                                </Td>
                                <Link to={`/admin/festivals/data/edit/${item._id}`}><Td><Button fontSize={"14px"} fontWeight={"400"} color={"blue"}>Edit</Button></Td></Link>
                                <Td><Button onClick={()=>deleteHandler(item._id)} fontSize={"14px"} fontWeight={"400"} color={"red"}>Delete</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Yoga Session Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {selectedItem && (
                            <>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>Trip Name:</strong> {selectedItem.tripName}</Text>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>From:</strong> {selectedItem.from}</Text>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>To:</strong> {selectedItem.to}</Text>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>From Date:</strong> {selectedItem.fromDate}</Text>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>To Date:</strong> {selectedItem.toDate}</Text>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>To Description:</strong> {selectedItem.description}</Text>
                                <Text fontSize={"20px"} fontWeight={"400"} mb={"20px"}><strong>Price:</strong> {selectedItem.price}</Text>
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
export default AdminFestivalsDateTable