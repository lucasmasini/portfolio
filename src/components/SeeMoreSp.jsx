import {
    Box,
    Button,
    Grid,
    Heading,
    Stack,
    Tooltip,
    useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import React from "react";

import { BsArrowLeftCircle } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiChakraui, SiJavascript } from "react-icons/si";

import ProjectCard from "./ProjectCard/ProjectCard";
import ColorMode from "./ColorMode";
import ScrollToTop from "./scroll/ScrollToTop";

import project1 from "./image/myCake.jpeg";
import project2 from "./image/threeline.jpeg";
import project3 from "./image/homeFood.jpeg";
import { Link } from "react-router-dom";

const SeeMoreSp = () => {
    return (
        <Box height="100vh">
            <Box
                bgGradient={useColorModeValue(
                    "linear(to-br, #7FB3D5, blackAlpha.300)",
                    "linear(to-br, blackAlpha.800, blackAlpha.200)"
                )}
                height="100%"
            >
                <ColorMode />
                <ScrollToTop />
                <Stack
                    alignItems="center"
                    width="100%"
                    height="100%"
                    spacing={{ base: "0", sm: "0", md: "8", lg: "16" }}
                >
                    <Stack paddingY={{ base: "4", sm: "4", md: "4", lg: "0" }}>
                        <Button
                            leftIcon={<BsArrowLeftCircle />}
                            colorScheme={useColorModeValue("", "pink")}
                            variant={useColorModeValue("outline", "outline")}
                            position={{
                                base: "initial",
                                sm: "initial",
                                md: "initial",
                                lg: "absolute",
                            }}
                            left="25px"
                            top="12px"
                        >
                            <Link to="/spanish">Volver</Link>
                        </Button>
                        <Heading>Proyectos</Heading>
                    </Stack>
                    <Grid
                        padding={4}
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            sm: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                        }}
                        as={motion.div}
                        alignItems="center"
                        justifyContent="space-between"
                        direction={{
                            base: "column",
                            sm: "column",
                            md: "column",
                            lg: "row",
                        }}
                        gap={10}
                        textAlign="center"
                        animate={{ y: [-300, 100, 0], x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <ProjectCard
                            id="project1"
                            title="My cake website"
                            image={project1}
                            alt="Project 1 Image - My cake Website"
                            text={`Esta es una web de pasteleria y postres. Es estatica, sin funcionalidades`}
                            deploy=""
                            repo="https://github.com/lucasmasini/my_cake"
                            icon={
                                <Stack direction="row" spacing={4}>
                                    <Tooltip hasArrow label="HTML" bg="gray.300" color="black">
                                        <span>
                                            <FaHtml5 size="36px" />
                                        </span>
                                    </Tooltip>
                                    <Tooltip hasArrow label="CSS" bg="gray.300" color="black">
                                        <span>
                                            <FaCss3Alt size="36px" />
                                        </span>
                                    </Tooltip>
                                    <Tooltip
                                        hasArrow
                                        label="Sass"
                                        bg="gray.300"
                                        color="black"
                                    >
                                        <span>
                                            <FaSass size="36px" />
                                        </span>
                                    </Tooltip>
                                </Stack>
                            }
                        />
                        <ProjectCard
                            id="project2"
                            title="Threeline"
                            image={project2}
                            alt="Project 2 Image - Threeline"
                            text={`Esta es un e-commerce con la modalidad de Basquet y NBA. Tiene las funcionalidades basicas de compra`}
                            deploy="https://lucasmasini.github.io/threeline/"
                            repo="https://github.com/lucasmasini/threeline"
                            icon={
                                <Stack direction="row" spacing={4} _dark>
                                    <Tooltip hasArrow label="HTML" bg="gray.300" color="black">
                                        <span>
                                            <FaHtml5 size="36px" />
                                        </span>
                                    </Tooltip>
                                    <Tooltip hasArrow label="CSS" bg="gray.300" color="black">
                                        <span>
                                            <FaCss3Alt size="36px" />
                                        </span>
                                    </Tooltip>
                                    <Tooltip
                                        hasArrow
                                        label="Javascript"
                                        bg="gray.300"
                                        color="black"
                                    >
                                        <span>
                                            <SiJavascript size="36px" />
                                        </span>
                                    </Tooltip>
                                </Stack>
                            }
                        />
                        <ProjectCard
                            id="project3"
                            title="HomeFood"
                            image={project3}
                            alt="Project 3 Image - HomeFood"
                            text={`Es un e-commerce de comida al estilo de PedidosYa o Rappi. `}
                            deploy="https://homeefood.herokuapp.com/"
                            repo="https://github.com/lucasmasini/HomeFood"
                            icon={
                                <Stack direction="row" spacing={4} _dark>
                                    <Tooltip hasArrow label="ReactJS" bg="gray.300" color="black">
                                        <span>
                                            <FaReact size="36px" />
                                        </span>
                                    </Tooltip>
                                    <Tooltip
                                        hasArrow
                                        label="ChakraUI"
                                        bg="gray.300"
                                        color="black"
                                    >
                                        <span>
                                            <SiChakraui size="36px" />
                                        </span>
                                    </Tooltip>
                                </Stack>
                            }
                        />
                    </Grid>
                </Stack>
            </Box>
        </Box>
    );
};

export default SeeMoreSp;