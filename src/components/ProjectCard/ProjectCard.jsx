import React from "react";

import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import FlipCard from "./FlipCard";

const ProjectCard = ({ id, image, title, text, icon, alt, deploy, repo}) => {
  const color = useColorModeValue(
    "linear(to-bl, #1A5276, blue.300)",
    "linear(to-br, #9B59B6 , pink.400)"
  );

  return (
    <Stack
      id={id}
      w="300px"
      h="415px"
      spacing={0}
      bgGradient={color}
      borderRadius="20px"
      boxShadow={'2px 3px 3px 1px rgba(0, 0, 0, 0.3)'}
    >
      <FlipCard image={image} alt={alt} deploy={deploy} repo={repo} />
      <Stack height="100%" padding={2} justifyContent="space-evenly" >
        <Stack spacing={4} paddingX="20px">
          <Heading fontSize="md" fontWeight="700">
            {title}
          </Heading>
          <Text fontSize="sm" fontWeight="400" opacity="0.9">
            {text}
          </Text>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Stack>{icon}</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
