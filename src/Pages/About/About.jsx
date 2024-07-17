import React from "react";
import { Box } from "@chakra-ui/react";
import theme from "../../theme";
import AboutusSection1 from "../../Components/AboutusRelated/AboutusSection1";
import AboutusSection2 from "../../Components/AboutusRelated/AboutusSection2";
import AboutusSection3 from "../../Components/AboutusRelated/AboutusSection3";
import AboutusSection4 from "../../Components/AboutusRelated/AboutusSection4";
import AboutusSection5 from "../../Components/AboutusRelated/AboutusSection5";
import AboutusTimeline from "../../Components/AboutusRelated/AboutusTimeline";


const About = () => {
  return (
    <>
      <Box
        mt="100px"
        p="0"
        m="0"
        boxSizing="border-box"
        fontFamily={theme.fonts.body}
        cursor="pointer"
      >
        <AboutusSection1 />
        <AboutusSection2 />
        <AboutusSection3 />
        <AboutusSection4 />
        <AboutusSection5 />
        <AboutusTimeline/>
      </Box>
    </>
  );
};
export default About;
