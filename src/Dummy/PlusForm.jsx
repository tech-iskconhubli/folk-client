import React, { useState } from 'react';
import { ChakraProvider, Box, Input, Button, VStack, HStack } from '@chakra-ui/react';

const PlusForm = () => {
  const [sections, setSections] = useState([{ title: '', desc: '' }]);

  const handleAddSection = () => {
    setSections([...sections, { title: '', desc: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSections = sections.map((section, idx) => {
      if (idx === index) {
        return { ...section, [name]: value };
      }
      return section;
    });
    setSections(newSections);
  };

  const handleSubmit = () => {
    // Format and send sections to API
    console.log('Submitting:', sections);
    // Make API call here
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          {sections.map((section, index) => (
            <HStack key={index} spacing={4}>
              <Input
                name="title"
                placeholder="Title"
                value={section.title}
                onChange={(e) => handleInputChange(index, e)}
              />
              <Input
                name="desc"
                placeholder="Description"
                value={section.desc}
                onChange={(e) => handleInputChange(index, e)}
              />
            </HStack>
          ))}
          <Button onClick={handleAddSection}>+</Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default PlusForm;
