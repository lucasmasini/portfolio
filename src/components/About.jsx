import React from "react";

import {
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import GoDownArrow from "./GoDownArrow/GoContactArrow";

const About = ({spanishContent,englishContent,english}) => {
  return (
    <Stack id="about" spacing={20} padding={4} alignItems="center">
      <Stack alignItems="center" marginTop={10}>
        <Heading>{english? spanishContent.conoceme.title : englishContent.about.title}</Heading>
      </Stack>
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "900px" }}
        height={{ base: "", sm: "", md: "", lg: "400px" }}
        alignItems="center"
        justifyContent="space-between"
        borderRadius="25px 0 0 25px"
        spacing={{ base: "60px" }}
      >
        <Stack
          maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
          height="100%"
          justify="space-evenly"
        >
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "lg" }}
              padding=" 0 10px 0 0"
              width="450px"
            >
              {english? spanishContent.conoceme.conocimientosTitle : englishContent.about.conocimientosTitle}
            </Text>
            <Text
              width="900px"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              {english? spanishContent.conoceme.conocimientosDesc : englishContent.about.conocimientosDesc}
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xssxsm", lg: "lg" }}
              padding=" 0 10px 0 0"
              width="450px"
            >
              {english? spanishContent.conoceme.formacionTitle: englishContent.about.formacionTitle}
            </Text>
            <Text
              width="900px"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              {english? spanishContent.conoceme.formacionDesc : englishContent.about.formacionDesc}
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "lg" }}
              padding=" 0 10px 0 0"
              width="450px"
            >
              {english? spanishContent.conoceme.estudiosTitle : englishContent.about.estudiosTitle}
            </Text>
            <Text
              width="900px"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              {english? spanishContent.conoceme.estudiosDesc : englishContent.about.estudiosDesc}
            </Text>
          </Stack>
          <Stack
            direction="row"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.800", "gray.200")}
              />
            }
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "lg" }}
              padding=" 0 10px 0 0"
              width="450px"
            >
              {english? spanishContent.conoceme.experienciaTitle : englishContent.about.experienciaTitle}
            </Text>
            <Text
              width="900px"
              fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "md" }}
              opacity={useColorModeValue("1", "0.9")}
              fontWeight="400"
              padding=" 0 0 0 20px"
            >
              {english? spanishContent.conoceme.experienciaDesc : englishContent.about.experienciaDesc}
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <GoDownArrow />
    </Stack>
  );
};

export default About;
