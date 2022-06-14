import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import SpanishButton from "../LanguageLinks/SpanishButton";
import EnglishButton from "../LanguageLinks/EnglishButton";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

import spanish from "./MenuAssets/es.svg";
import englishButton from "./MenuAssets/gb.svg";

const LeftMenu = ({spanishContent,englishContent,english}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
    onClose();
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        left={{ base: "10px", sm: "10px", md: "10px", lg: "20px" }}
        top="10px"
        opacity={{ base: 1, sm: 1, md: 1, lg: 1 }}
        size="lg"
        zIndex="999"
        background={'rgba(260, 260, 260, 0.3)'}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton border={'1px solid grey'}/>
          <DrawerHeader  background={'#2980B9'}>{english? spanishContent.leftMenu.navegacion : englishContent.leftMenu.nevagacion}</DrawerHeader>

          <DrawerBody  background={'#2980B9'}>
            <Stack spacing={7} marginTop={4}>
              <Stack direction="column" opacity="0.9" spacing={6} fontSize={'18px'}>
                <Link href="#home" w="fit-content">
                {english? spanishContent.leftMenu.inicio : englishContent.leftMenu.inicio}
                </Link>
                <Stack spacing={6}>
                  <Link href="#projects" w="fit-content">
                  {english? spanishContent.leftMenu.proyectos : englishContent.leftMenu.proyectos}
                  </Link>
                </Stack>
                <Link href="#about" w="fit-content">
                {english? spanishContent.leftMenu.conoceme : englishContent.leftMenu.conoceme}
                </Link>
                <Link href="#contact" w="fit-content">
                {english? spanishContent.leftMenu.contacto : englishContent.leftMenu.contacto}
                </Link>
              </Stack>
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
              <Stack
                direction="row"
                alignItems="center"
                spacing={8}
              >
                <Menu>
                  <MenuButton as={Button} size="md">
                  {english? spanishContent.leftMenu.idioma : englishContent.leftMenu.idioma} <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <SpanishButton spanish={spanish} />
                    </MenuItem>
                    <MenuItem minH="40px">
                      <EnglishButton english={englishButton} />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LeftMenu;
