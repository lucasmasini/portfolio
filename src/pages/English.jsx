import React from "react";

import { Container, Stack, Box, useColorModeValue } from "@chakra-ui/react";

import { motion } from "framer-motion";

import ColorMode from "../components/ColorMode";
import ScrollToTop from "../components/scroll/ScrollToTop";
import LeftMenu from "../components/Menu/LeftMenu";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const englishContent = {
  leftMenu:{
    navegacion: 'Navigation',
    inicio: 'Home',
    proyectos: 'Projects',
    conoceme: 'About me',
    contacto: 'Contact',
    idioma: 'Lenguage'
  },
  nav:{
    inicio: 'Home',
    proyectos: 'Projects',
    conoceme: 'About me',
    contacto: 'Contact'
  },
  home:{
    name:'Lucas Masini',
    description1: 'Frontend - Fullstack developer',
    description2: 'Web Developer | CABA, Argentina',
    descarga: 'Download CV'
  },
  projects:{
    title:'Projects',
    project1:'This is a website about a cake shop. Static web, no features',
    project2:'This is an e-commerce of Basketball and NBA. It has the basic functionality',
    project3:'This is a food e-commerce in the style of PedidosYa or Rappi.',
    verMas: 'See more',
  },
  about:{
    title:'About me',
    conocimientosTitle:'Knowledge',
    conocimientosDesc:'HTML5, CSS3, Javascript, Sass, Bootstrap, Git, ReactJS, ChakraUI, Node JS,My sql',
    formacionTitle: 'Academic Training',
    formacionDesc:'Take courses at Coder House on Web Development, Javascript, React Js. The backend development course is currently underway (Node Js).',
    estudiosTitle:'Studies',
    estudiosDesc:'Currently studying a Bachelor of Computer Science at the UBA University. I studied Industrial Engineering for a few years before this career.',
    experienciaTitle:'Work experience',
    experienciaDesc:'I work as an ABM analyst for the consulting firm Enta Consulting, from April 2017, to the present.'
  },
  contact:{
    title: 'Contact me',
    nombre:'Full name',
    mail:'Email',
    telefono:'Phone',
    mensaje:'Message',
    enviar:'Send',
    confirmacion:"Your mail has been successfully send"
  }
}



const English = () => {
  return (
    <Box>
        <Box
          as={motion.div}
          animate={{ x: [500, 0], opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          bgGradient={useColorModeValue(
            "linear(to-br, #7FB3D5, blackAlpha.300)",
            "linear(to-br, blackAlpha.800, blackAlpha.200)"
          )}
          height="100%"
        >
          <Box width="100%" height="100vh">
            <ColorMode />
            <ScrollToTop />
            <LeftMenu englishContent={englishContent} english={false}/>
            <Container
              maxWidth={{ base: "100%", sm: "100%", md: "100%",lg:'1100px'}}
            >
              <Stack spacing={14}>
                <Stack position="sticky">
                  <Nav englishContent={englishContent} english={false}/>
                </Stack>
                <Stack>
                  <Home englishContent={englishContent} english={false}/>
                </Stack>
              </Stack>
            </Container>
          </Box>
          <Box marginTop="100px" width="100%">
            <Container
              maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "1100px"}}
            >
              <Projects englishContent={englishContent} english={false}/>
            </Container>
          </Box>
        </Box>
        <Box
          bgGradient={useColorModeValue(
            "linear(to-tr, #7FB3D5, blackAlpha.300)",
            "linear(to-tr, blackAlpha.800, blackAlpha.200)"
          )}
          height="100%"
        >
          <Box marginTop="0" width="100%">
            <Container
              maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "1100px" }}
            >
              <About englishContent={englishContent} english={false}/>
            </Container>
          </Box>
          <Box marginTop={4} width="100%">
            <Container
              maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "1100px" }}
            >
              <Stack justifyContent="space-between" paddingY={4}>
                <Contact englishContent={englishContent} english={false} />
                <Footer englishContent={englishContent} english={false}/>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Box>
  );
};

export default English;
