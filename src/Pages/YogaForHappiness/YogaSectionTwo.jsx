import { Box, Button, Flex, Image, Text, border } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import theme from "../../theme";
import React from "react";

const YogaSectionTwo = () => {

  console.log('yoga section two')
  return (
    <Box width={"100%"} my={['1rem']} overflowX={'hidden'}>
      <Flex
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        padding={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={'20px'}

      >
        {/* Box 1 */}
        <Box
       w={['100%','100%','auto']}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={['9px','10px','10px','15px']}
          px={['0','2rem']}
        >
          {/* small heading */}
          <Box fontSize={['.7rem','1rem']} color={theme.colors.col.secondary} fontWeight={"bold"}>
            WE ARE A PRAYER
          </Box>
          {/*Big  Heading */}
          <Box
            fontSize={['1.6rem','2.5rem','2.5rem' , '3rem']}
            fontWeight={"600"}
            maxW={"700px"}
            minW={'300px'}
            textAlign={"center"}
            lineHeight={['','3.5rem']}
          >
            WE ARE A HINDU THAT BELIEVE IN RAM
          </Box>

          {/* Matter */}
          <Text
            fontSize={['.7rem','0.8rem','0.9rem']}
            display={"inline-block"}
            maxW={"700px"}
            textAlign={"center"}
            lineHeight={[ '1.2rem', "1.5rem"]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam repudiandae delectus recusandae eum eos, maxime ipsa amet reiciendis sequi cum voluptatibus eligendi hic numquam ad ab optio deleniti adipisci explicabo et, soluta cumque fuga saepe fugit! Aliquid, quos doloremque.
          </Text>
          {/* Button */}
          <Box>
            <Button
              bg={theme.colors.col.secondary}
              textColor={"white"}
              fontWeight={"450"}
              fontSize={['.7rem','0.8rem','0.9rem']}
            >
              Read More
            </Button>
          </Box>
        </Box>

        {/* Box 2 */}

        <Box  w={['100%','100%','auto']}>
          <Box display={'flex'} flexDirection={['column','column','row','row']} alignItems={['center','center','start']} gap={'20px'} p={'1rem'}>
            {/* Image One */}
            <Box w={['100%','70%','200px']} h={['auto','400px','290px']} borderRadius={'10px'} overflow={'hidden'}>
              <Image
              objectFit={'cover'}
              objectPosition={'bottom center'}
              w={'100%'}
              h={'100%'}
              borderRadius={'10px'}
                src="https://images.unsplash.com/photo-1538024333176-f25f63f873ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Bpcml0dWFsfGVufDB8fDB8fHww"
                alt=""
              />
            </Box>

            {/* Image Two */}
               <Box  w={['100%','70%','200px']} h={['auto','400px','290px']} mt={['0','0','5rem']} borderRadius={'10px'} overflow={'hidden'}>
              <Image
              objectFit={'cover'}
              objectPosition={'center'}
                 w={'100%'}
                 h={'100%'}
                 borderRadius={'10px'}
                src="https://images.unsplash.com/photo-1616377009507-c8111f07aced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Box>

            {/* Image Three */}
               <Box w={['100%','70%','200px']} h={['auto','400px','290px']} borderRadius={'10px'} overflow={'hidden'}>
              <Image
              objectFit={'cover'}
              objectPosition={'top center'}
                 w={'100%'}
                 h={'100%'}
                 borderRadius={'10px'}
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Box>

          </Box>
        </Box>


       {/* Box 3 */}

       <Box
       w={['100%','100%','auto']}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={['9px','10px','10px','15px']}
          px={['0','2rem']}
        >
          {/* small heading */}
          <Box fontSize={['.7rem','1rem']} color={theme.colors.col.secondary} fontWeight={"bold"}>
           OUR MISSION & MISSION
          </Box>
          {/*Big  Heading */}
          <Box
          fontSize={['1.6rem','2.5rem','2.5rem' , '3rem']}
            fontWeight={"600"}
            maxW={"500px"}
            minW={'300px'}
            textAlign={"center"}
          >
          CELEBRATE WITH US
          </Box>

          {/* Matter */}
          <Text
            fontSize={['.7rem','0.8rem','0.9rem']}
            display={"inline-block"}
            maxW={"700px"}
            textAlign={"center"}
            lineHeight={[ '1.2rem', "1.5rem"]}
            px={['0.5rem','auto']}
          >
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima in ea eaque unde, facere voluptatem soluta cumque illum cupiditate vel?
          </Text>
          {/* Button */}
          <Box>
            <Button
              bg={theme.colors.col.secondary}
              textColor={"white"}
              fontWeight={"450"}
              fontSize={['.7rem','0.8rem','0.9rem']}
            >
              Read More
            </Button>
          </Box>
        </Box>


      </Flex>
    </Box>
  );
};

export default YogaSectionTwo;
