import React, { useEffect, useState } from 'react'
import { getFestivalsFormData } from '../../Redux/app/action';
import { Table, Text, Flex, Input, TableContainer, Thead, Tbody, Tr, Th, Td, Button, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';

const AdminFesticalsUsersData = () => {

  const store = useSelector((state) => state.AppReducer.festivalsData);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [filter, setFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [filteredData, setFilteredData] = useState(store);
  const loading = useSelector(state=>state.AppReducer.isLoading)

  console.log("store", store)
  useEffect(() => {
      dispatch(getFestivalsFormData())
      
  }, [dispatch, refresh]);

  useEffect(() => {
      setFilteredData(
          store.filter(item => item.watsAppNumber.toString().includes(filter))
      );
  }, [filter, store]);

  useEffect(() => {
      setFilteredData(
          store.filter(item => item.name.toString().includes(nameFilter))
      );
  }, [nameFilter, store]);

  useEffect(() => {
      setFilteredData(
          store.filter(item => item.createdAt?.split("T")[0].toString().includes(dateFilter))
      );
  }, [dateFilter, store]);

  const handleViewClick = (item) => {
      setSelectedItem(item);
      onOpen();
  };

  const handleFilterChange = (e) => {
      setFilter(e.target.value);
  };

  const handleFilterNameChange = (e) => {
      setNameFilter(e.target.value);
  };

  const handleFilterDateChange = (e) => {
      setDateFilter(e.target.value);
  };

  return (
      <>
          {loading && <KrishnaSpinner/>}

          <TableContainer bgColor={"white"}>
              <Box bgColor={"gray"} color={"white"} p={"5px"}>
                  <Box fontSize={"20px"} fontFamily={"body"} width={""} display={"flex"} justifyContent={"space-around"}>
                      <Input sx={{'::placeholder': {color: 'white'}}} type='number' value={filter} onChange={handleFilterChange} ml={"20px"} placeholder='Filter by number' />
                      <Input sx={{'::placeholder': {color: 'white'}}} type='text' value={nameFilter} onChange={handleFilterNameChange} ml={"20px"} placeholder='Filer by name' />
                      <Input sx={{'::placeholder': {color: 'white'}}} type='date' value={dateFilter} onChange={handleFilterDateChange} ml={"20px"} placeholder='Filter by Date' />
                  </Box>
              </Box>
              {deleteSuccess && <Alert status='error'><AlertIcon />Deleted Success</Alert>}
              <Table size="sm">
                  <Thead>
                      <Tr>
                          <Th>S.no</Th>
                          <Th>Date</Th>
                          <Th>Name</Th>
                          <Th>Email</Th>
                          <Th>Number</Th>
                          <Th>Age</Th>
                          <Th>Collage or Company</Th>
                          {/* <Th>Branch</Th>
                          <Th>Price</Th> */}
                          <Td pl={"30px"}></Td>
                      </Tr>
                  </Thead>
                  <Tbody fontSize={"14px"} fontWeight={"400"}>
                      {filteredData?.map((item, index) => (
                          <Tr key={item.id}>
                              <Td>{index + 1}</Td>
                              <Td>{item.createdAt?.split("T")[0]}</Td>
                              <Td>{item.name}</Td>
                              <Td>{item.email}</Td>
                              <Td>{item.watsAppNumber}</Td>
                              <Td>{item.age}</Td>
                              <Td>{item.collageOrCompany}</Td>
                              {/* <Td>{item.branch}</Td>
                              <Td>{item.price}</Td> */}
                              <Td>
                                  <Button onClick={() => handleViewClick(item)} fontSize={"14px"} fontWeight={"400"} color={"green"}>View</Button>
                              </Td>
                              {/* Uncomment the following lines if edit and delete functionality is needed */}
                              {/* <Link to={`/admin/yoga/data/edit/${item._id}`}><Td><Button fontSize={"14px"} fontWeight={"400"} color={"blue"}>Edit</Button></Td></Link> */}
                              {/* <Td><Button onClick={()=>deleteHandler(item._id)} fontSize={"14px"} fontWeight={"400"} color={"red"}>Delete</Button></Td> */}
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
                                  <Text flex="0 0 200px"><strong>Date</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.createdAt?.split("T")[0]}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Name</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.name}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Email</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.email}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Number</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.watsAppNumber}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Age</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.age}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Collage or Company</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.collageOrCompany}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Branch</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.branch}</Text>
                              </Flex>
                              <Flex fontSize="20px" fontWeight="500" mb="10px" borderBottom="1px solid #E2E8F0" p="10px" alignItems="center">
                                  <Text flex="0 0 200px"><strong>Price</strong></Text>
                                  <Text flex="0 0 20px" textAlign="center">:</Text>
                                  <Text flex="1" color="gray">{selectedItem.price}</Text>
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

export default AdminFesticalsUsersData