import React, { useEffect, useState } from 'react';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { Box, Button, Input, Card, Heading, Image, Stack, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getYogaDataBasedOnLocationAndUsers } from '../../Redux/app/action';
import theme from "../../theme";

const AdminYogaEvents = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  
  const store = useSelector((store) => store.AppReducer.adminGetDataBasedOnLocation);

  useEffect(() => {
    dispatch(getYogaDataBasedOnLocationAndUsers());
  }, [dispatch]);

  useEffect(() => {
    if (store.data) {
      const filtered = store.data.filter(item => {
        const matchesLocation = item.location.toLowerCase().includes(locationFilter.toLowerCase());
        const matchesDate = item.events[0].date.includes(dateFilter);

        return matchesLocation && matchesDate;
      });

      setFilteredData(filtered);
    }
  }, [locationFilter, dateFilter, store]);

  const handleViewUsers = (event) => {
    setSelectedEvent(event);
    onOpen();
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  console.log(store,"store one")

  return (
    <>
      <AdminTopNavbar />
      <Box overflow={"scroll"} height={"92vh"}>
        <Box mt={"10px"}  width={"90%"} margin={"auto"}>
          <Box
          p={"10px"}
            fontSize={"20px"}
            fontFamily={"body"}
            width={""}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Input
            bgColor={"gray"} color={"white"}
              sx={{ "::placeholder": { color: "white" } }}
              type="text"
              value={locationFilter}
              onChange={handleLocationFilterChange}
              ml={"20px"}
              placeholder="Filter by Location"
            />
            <Input
            bgColor={"gray"} color={"white"}
              sx={{ "::placeholder": { color: "white" } }}
              type="date"
              value={dateFilter}
              onChange={handleDateFilterChange}
              ml={"20px"}
              placeholder="Filter by Date"
            />
          </Box>
        </Box>

        <Box p={6} display="flex" flexWrap="wrap" gap={4} justifyContent="center" width={"100%"}>
          {filteredData.map((item, index) => (
            <Card
              key={index}
              width={{ base: '100%', sm: '48%', md: '23%', lg: '20%' }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m={2}
            >
              <Image
                objectFit="cover"
                width="100%"
                height="150px"
                src="https://cdn.pixabay.com/photo/2022/06/27/08/37/monk-7287041_1280.jpg"
                alt="Yoga Event"
              />

              <Stack spacing={3} p={3}>
                <Heading color="orange" fontSize="lg" fontWeight="bold">
                  {item.events[0].date}
                </Heading>
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Location</strong>: {item.location}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Time</strong>: {item.events[0].time} AM
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Price</strong>: {item.events[0].price} Rupees
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Duration</strong>: {item.events[0].duration}
                  </Text>
                  <Text fontSize="sm" color="gray.700" fontFamily={theme.colors.col.body}>
                    <strong>Description</strong>: {item.events[0].description}
                  </Text>
                </VStack>
                <Button size="sm" bgColor="orange" color="white" mt={2} _hover={{ bg: 'orange.600' }} onClick={() => handleViewUsers(item.events[0])}>
                  View Users
                </Button>
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Attendees Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple" width="100%">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>WhatsApp</Th>
                  <Th>Age</Th>
                  <Th>Collage/Company</Th>
                </Tr>
              </Thead>
              <Tbody>
                {selectedEvent?.attendeesDetails.map((attendee, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td fontWeight="bold">{attendee.name}</Td>
                    <Td>{attendee.email}</Td>
                    <Td>{attendee.watsAppNumber}</Td>
                    <Td>{attendee.age}</Td>
                    <Td>{attendee.collageOrCompany}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
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

export default AdminYogaEvents;

