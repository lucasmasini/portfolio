import {
  Box,
  Button,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import React from "react";

import ColorMode from "../components/ColorMode";

import spanish from "../components/image/es.svg";
import english from "../components/image/gb.svg";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <Box
      as={motion.div}
      animate={{ y: [500, 0], opacity: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1] }}
      height="100vh"
      bgGradient={useColorModeValue(
        "linear(to-br, #7FB3D5, blackAlpha.400)",
        "linear(to-br, blackAlpha.800, blackAlpha.200)"
      )}
      amimate
    >
      <ColorMode/>
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        spacing={18}
      >
        <Stack>
        </Stack>
        <Stack direction="row" spacing={8}>
          <Link to="/spanish">
            <Button
              w="190px"
              direction="row"
              padding={8}
              variant={useColorModeValue("outline", "outline")}
              colorScheme={useColorModeValue("", "pink")}
              justifyContent="center"
              alignItems="center"
              borderRadius="2xl"
            >
              <Image
                boxSize="2.5rem"
                borderRadius="full"
                src={spanish}
                alt="spanish flag"
                mr="12px"
              />
              <Text fontSize={20}>Español</Text>
            </Button>
          </Link>
          <Link to="/english">
            <Button
              w="190px"
              direction="row"
              padding={8}
              variant={useColorModeValue("outline", "outline")}
              colorScheme={useColorModeValue("", "pink")}
              justifyContent="center"
              alignItems="center"
              borderRadius="2xl"
            >
              <Image
                boxSize="2.5rem"
                borderRadius="full"
                src={english}
                alt="Gb flag"
                mr="12px"
              />
              <Text fontSize={20}>English</Text>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Selection;
