import React from "react";

import { motion } from "framer-motion";

import { Container, Stack, Box, useColorModeValue } from "@chakra-ui/react";

import ColorMode from "../components/ColorMode";
import ScrollToTop from "../components/scroll/ScrollToTop";
import LeftMenu from "../components/Menu/LeftMenu";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const spanishContent = {
  leftMenu:{
    navegacion: 'Navegacion',
    inicio: 'Inicio',
    proyectos: 'Proyectos',
    conoceme: 'Conoceme',
    contacto: 'Contacto',
    idioma: 'Idioma'
  },
  nav:{
    inicio: 'Inicio',
    proyectos: 'Proyectos',
    conoceme: 'Conoceme',
    contacto: 'Contacto'
  },
  home:{
    name:'Lucas Masini',
    description1: 'Frontend - Fullstack developer',
    description2: 'Desarrollador Web | CABA, Argentina',
    descarga: 'Descargar CV'
  },
  proyectos:{
    title:'Proyectos',
    project1:'Esta es una web de pasteleria y postres. Es estatica, sin funcionalidades',
    project2:'Esta es un e-commerce con la modalidad de Basquet y NBA. Tiene las funcionalidades basicas de compra',
    project3:'Es un e-commerce de comida al estilo de PedidosYa o Rappi.',
    verMas: 'Ver mas',
  },
  conoceme:{
    title:'Conoceme',
    conocimientosTitle:'Conocimientos',
    conocimientosDesc:'HTML5, CSS3, Javascript, Sass, Bootstrap, Git, ReactJS, ChakraUI, Node JS,My sql',
    formacionTitle: 'Formacion',
    formacionDesc:'Realice cursos en Coder House de Desarrolo web, Javascript, React Js. El curso de desarrollo backend esta en curso actualmente (Node Js).',
    estudiosTitle:'Estudios',
    estudiosDesc:'Actualmente cursando la carrera de Licenciatura de Ciencias de la Computacion en la Facultad de la UBA. Curse algunos años de Ingenieria Industrial antes de esta carrera.',
    experienciaTitle:'Experiencia',
    experienciaDesc:'Me desempeñe como analista ABM para la consultora Enta Consulting, desde Abril del 2017, hasta la actualidad.'
  },
  contacto:{
    title: 'Contactame',
    nombre:'Nombre Completo',
    mail:'Email',
    telefono:'Teléfono',
    mensaje:'Mensaje',
    enviar:'Enviar',
    confirmacion:"Se envio el mail correctamente"
    
  }
}

const Spanish = () => {
  return (
    <Box>
      <Box
        as={motion.div}
        animate={{ x: [-500, 0], opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
        bgGradient={useColorModeValue(
          "linear(to-br, #7FB3D5, blackAlpha.300)",
          "linear(to-br, blackAlpha.800, blackAlpha.200)"
        )}
        height="100%"
      >
        <Box width="100%" height="100vh">
          <ColorMode />
          <ScrollToTop />
          <LeftMenu spanishContent={spanishContent} english={true}/>
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%",lg:'1100px'}}
          >
            <Stack spacing={14}>
              <Stack position="sticky">
                <Nav spanishContent={spanishContent} english={true}/>
              </Stack>
              <Stack>
                <Home spanishContent={spanishContent} english={true}/>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box marginTop="100px" width="100%">
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "1100px"}}
          >
            <Projects spanishContent={spanishContent} english={true}/>
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
            <About spanishContent={spanishContent} english={true}/>
          </Container>
        </Box>
        <Box marginTop={4} width="100%">
          <Container
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "1100px" }}
          >
            <Stack justifyContent="space-between" paddingY={4}>
              <Contact spanishContent={spanishContent} english={true}/>
              <Footer spanishContent={spanishContent} english={true}/>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Spanish;
