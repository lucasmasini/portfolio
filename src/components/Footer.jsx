import {
  IconButton,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

function Footer({spanishContent,englishContent,english}) {
  return (
    <Stack
      direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      borderTop={useColorModeValue("1px solid #555", "1px solid")}
      padding="10px 10px 0"
      maxW="100%"
    >
      <Stack direction="row">
        <Link
          href="https://www.linkedin.com/in/lucas-masini-10183913a/"
          target="_blank"
        >
          <IconButton icon={<FaLinkedin />} isRound="true" size="md" />
        </Link>
        <Link href="https://github.com/lucasmasini" target="_blank">
          <IconButton icon={<FaGithub />} isRound="true" size="md" />
        </Link>
      </Stack>
      <Stack></Stack>
      <Stack direction="row" fontSize="md" spacing={6}>
        <Link href="#home">{english? spanishContent.nav.inicio : englishContent.nav.inicio}</Link>
        <Link href="#projects">{english? spanishContent.nav.proyectos : englishContent.nav.proyectos}</Link>
        <Link href="#about">{english? spanishContent.nav.conoceme : englishContent.nav.conoceme}</Link>
        <Link href="#contact">{english? spanishContent.nav.contacto : englishContent.nav.contacto}</Link>
      </Stack>
    </Stack>
  );
}

export default Footer;
