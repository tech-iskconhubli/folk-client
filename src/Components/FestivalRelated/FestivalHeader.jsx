import { useRef } from "react";
import { Box, Text, Flex, VStack, Button } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import theme from "../../theme";

const festivals = [
  {
    id: 1,
    title: "Puri Jagannath Festival",
    image:
      "https://www.iskconpune.com/wp-content/uploads/2023/02/chandan-yatra1-e1676971360826.jpg",
    description:
      "The Puri Jagannath Festival, or Rath Yatra, celebrates the annual journey of Lord Jagannath, Balabhadra, and Subhadra from the Jagannath Temple to the Gundicha Temple in Puri, Odisha. This festival is marked by a grand procession of ornate chariots, attracting millions of devotees and showcasing the vibrant cultural heritage of India.",
  },
  {
    id: 2,
    title: "Sri Krishna Janmashtami",
    image: "https://www.iskconpune.com/wp-content/uploads/2023/02/slider-2.jpg",
    description:
      "By observing Sri Krishna Janmashtami, one becomes free from the sinful reactions committed in seven lives. One gets good children, good health, and great wealth…. One will not have to fear enemies and will get sufficient rainfall and never have to suffer from drought. One will not have to fear natural calamities, hellish conditions, snakes, disease, or the attacks of rogues and thieves",
  },
  {
    id: 3,
    title: "Radhastami",
    image:
      "https://www.iskconpune.com/wp-content/uploads/2023/01/Radhastami1.jpg",
    description:
      "Radha Ashtami is a Hindu festival dedicated to Radha, the divine consort of Lord Krishna. It is celebrated on the eighth day of the bright fortnight of the Bhadrapada month. Devotees observe this day with prayers and devotional rituals to honor Radhas love and devotion towards Krishna.",
  },
  {
    id: 4,
    title: "Sri Ram Navami",
    image:
      "https://www.iskconpune.com/wp-content/uploads/2023/01/ram-navami1.jpg",
    description:
      "Sri Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Lord Vishnu. It is observed on the ninth day of the Chaitra month in the Hindu calendar. Devotees celebrate with prayers, devotional songs, and readings of the Ramayana, highlighting the virtues of righteousness and devotion embodied by Lord Rama.",
  },
  {
    id: 5,
    title: "Govardhan Puja",
    image:
      "https://www.iskconpune.com/wp-content/uploads/2023/01/Govardhan-Puja-scaled.jpg",
    description:
      "Govardhan Puja celebrates Lord Krishnas lifting of Mount Govardhan to protect the villagers from Indras wrath. It involves offering a variety of vegetarian food items to Lord Krishna as a symbol of gratitude and devotion, emphasizing natures importance and the triumph of faith.",
  },
  {
    id: 6,
    title: "Gita Jayanti",
    image:
      "https://www.iskconpune.com/wp-content/uploads/2023/01/Gita-Jayanti.jpg",
    description:
      "Gita Jayanti celebrates the day Lord Krishna imparted the teachings of the Bhagavad Gita to Arjuna on the battlefield. It marks a profound discourse on duty, righteousness, and spiritual realization, offering timeless wisdom that promotes peace and inner harmony.",
  },
  // Add more festivals as needed
];

const FestivalHeader = () => {
  const carouselRef = useRef(null);

  useGSAP(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll(".carousel-slide");

    gsap.set(slides, { opacity: 0, scale: 0.9 });

    let tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.to(slides[0], { opacity: 1, scale: 1 });

    let currentIndex = 0;

    const rotateSlides = () => {
      tl.to(slides[currentIndex], { opacity: 0, scale: 0.9 });
      currentIndex = (currentIndex + 1) % slides.length;
      tl.to(slides[currentIndex], { opacity: 1, scale: 1 });
    };

    const interval = setInterval(rotateSlides, 5000);

     return function () {
           tl.kill();
           clearInterval(interval);
     }
    
  }, []);

  return (
    <Flex
      w={"100%"}
      h={["30vh", "40vh", "50vh", "75vh", "90vh"]}
      mt={['6rem']}
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box ref={carouselRef} width="100%" height="100%" overflow="hidden">
        {festivals.map((festival) => (
          <Box
            key={festival.id}
            className="carousel-slide"
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
          >
            <Box
              backgroundImage={`url(${festival.image})`}
              backgroundPosition={"center center"}
              backgroundSize="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            />
          <Box
        gap={['0.5rem','0.6rem','0.8rem','1rem']}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        position={'relative'}
        bgColor={"rgb(0,0,0,0.65)"}
        w={"100%"}
        h={"100%"}
        color={"white"}
        overflowX={"hidden"}
        px={["1rem",'0.7rem','1.5rem','1.5rem','1.8rem','3rem']}
      >
   
        <VStack  alignItems={'flex-start'} gap={['0.5rem','0.9rem','1.5rem','1.8rem','2rem','2.5rem']} ml={{xl:'3rem'}}  w={['300px','400px','500px','600px','850px','950px']}>
          <VStack gap={['0.5rem','0.9rem','1rem','1.5rem','1.5rem','2rem']} alignItems={'flex-start'}>
          <Box
            className="yoga-heading"
            fontSize={['1.2rem','2rem','3rem','3.5rem','5rem']}
            lineHeight={['2rem','2.8rem','3.7rem','4.8rem','6rem']}
            fontWeight={"500"}
            display={"inline-block"}
            fontFamily={theme.fonts.body}
          >
           {festival.title}
          </Box>
          <Box >
            <Text fontWeight={'300'} fontFamily={theme.fonts.body} fontSize={["0.6rem","0.7rem",'0.9rem','1rem','1.1rem','1.2rem']}  display={"inline-block"} lineHeight={['1rem','1.2rem','1.5rem','1.7rem','2rem']}>
            {festival.description}
            </Text>
          </Box>

          </VStack>


        <Box> 
          <Link to={'/festival/:singlePage'}>
          <Button
           
           fontSize={["0.7rem", "0.8rem", "1rem", "0.9rem", "1rem"]}
           p={["0.9rem", "1.2rem", "1.5rem", "2rem"]}
           colorScheme="orange"
           display={"flex"}
           alignItems={"center"}
           borderRadius={"10px"}
          >
            Support Now
          </Button>
          </Link>
        </Box>
        </VStack>

        </Box>      
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default FestivalHeader;
