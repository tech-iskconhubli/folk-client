import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { DNA } from 'react-loader-spinner';
const KrishnaSpinner = () => {
  return (
    <Center
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(255, 255, 255, 0.7)" // Semi-transparent overlay
      zIndex="9999" // Ensure it's above other content
    >
      <Box>
      <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
      </Box>
    </Center>
  );
};

export default KrishnaSpinner;

