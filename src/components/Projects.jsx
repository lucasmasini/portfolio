import {
  Button,
  Heading,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

import { BsPlusCircle } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt,FaSass } from "react-icons/fa";
import { SiChakraui, SiJavascript } from "react-icons/si";

import ProjectCard from "./ProjectCard/ProjectCard";
import GoAboutArrow from "./GoDownArrow/GoAboutArrow";

import project1 from "./image/myCake.jpeg";
import project2 from "./image/threeline.jpeg";
import project3 from "./image/homeFood.jpeg";

import { Link } from "react-router-dom";

const Projects = ({spanishContent,englishContent,english}) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Stack id="projects" alignItems="center" spacing={16}>
      <Heading marginTop="20px">{english? spanishContent.proyectos.title : englishContent.projects.title}</Heading>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={10}
        textAlign="center"
      >
        <ProjectCard
          title="My cake website"
          image={project1}
          alt="Project 1 Image - My cake Website"
          text={english? spanishContent.proyectos.project1 : englishContent.projects.project1}
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
              text={english? spanishContent.proyectos.project2 : englishContent.projects.project2}
              deploy="https://threeline.vercel.app/index.html"
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
          text={english? spanishContent.proyectos.project3 : englishContent.projects.project3}
          deploy="https://homeefood.herokuapp.com/"
          repo="https://github.com/lucasmasini/HomeFood"
          icon={
            <Stack direction="row" spacing={4} _dark>
              <Tooltip hasArrow label="ReactJS" bg="gray.300" color="black">
                <span>
                  <FaReact size="36px"/>
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
      </Stack>
      <Stack spacing={10}>
        <Button
          leftIcon={<BsPlusCircle />}
          colorScheme={useColorModeValue("", "pink")}
          variant={useColorModeValue("outline", "outline")}
        >
          <Link to="/SeeMoreEs" onClick={scrollTop}>
            {english? spanishContent.proyectos.verMas : englishContent.projects.verMas}
          </Link>
        </Button>
        <GoAboutArrow />
      </Stack>
    </Stack>
  );
};

export default Projects;
