import React, { useEffect, useState } from 'react'
import { Table,Text, TableContainer, Thead, Tbody, Tr, Th, Td, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminTripsFormData, getAdminTripsFormData } from '../../Redux/app/action';
import { Link } from 'react-router-dom';

const AdminTripsDataTable = () => {
  const loading = false;
    const store = useSelector((state) => state.AppReducer.adminTripsData);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = useState(null);
    const [refresh ,setRefresh] = useState(false)
    useEffect(() => {
        dispatch(getAdminTripsFormData());
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
       dispatch(deleteAdminTripsFormData(id))
       .then(res=>{
           console.log(res)
           if(res?.payload?.message === "delete success"){
               setRefresh(prev=>!prev)
           }
       })
     }

    //  tripName:{type:String, required:true},
    //  from:{type:String, required:true},
    //  to:{type:String, required:true},
    //  fromDate:{type:String, required:true},
    //  toDate:{type:String, required:true},
    //  img:[{type:String, required:true}],
    //  description:{type:String, required:true},
    //  price:{type:Number, required:true},
    //  placesOfVisit:[{type:String, required:true}]
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
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th>S.no</Th>
                            <Th>tripName</Th>
                            {/* <Th>From</Th>
                            <Th>To</Th>
                            <Th>From Date</Th>
                            <Th>To Date</Th> */}
                            <Th>Description</Th>
                            <Th>Price</Th>
                            <Td pl={"30px"}></Td>
                        </Tr>
                    </Thead>
                    <Tbody fontSize={"14px"} fontWeight={"400"}>
                        {store?.map((item, index) => (
                            <Tr key={item.id}>
                                <Td>{index + 1}</Td>
                                <Td>{item.tripName}</Td>
                                {/* <Td>{item.from}</Td>
                                <Td>{item.to}</Td>
                                <Td>{item.fromDate}</Td>
                                <Td>{item.toDate}</Td> */}
                                {/* <Td>{truncateLocation(item.availabilityStatus)}</Td> */}
                                <Td>{truncateDescription(item.description)}</Td>
                                <Td>{item.price}</Td>
                                <Td>
                                    <Button onClick={() => handleViewClick(item)} fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button>
                                </Td>
                                <Link to={`/admin/trips/data/edit/:id${item._id}`}><Td><Button fontSize={"14px"} fontWeight={"400"} color={"blue"}>Edit</Button></Td></Link>
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


export default AdminTripsDataTable