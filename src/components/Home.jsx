import React from "react";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

import {
  Stack,
  Heading,
  Link,
  Image,
  Button,
  Text,
  Flex,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

import GoProjectsArrow from "./GoDownArrow/GoProjectsArrow";

import html5Icon from "./image/html5-svgrepo-com.svg";
import cssIcon from "./image/css-3-svgrepo-com.svg";
import jsIcon from "./image/javascript-svgrepo-com.svg";
import gitIcon from "./image/git-svgrepo-com.svg";
import reactIcon from "./image/react-svgrepo-com.svg";
import avatar from "./image/avatar.jpg";
import curriculum from "./assets/LucasMasiniCV.pdf";
import nodeIcon from './image/node-svgrepo-com.svg';
import sassIcon from './image/sass-svgrepo-com.svg';
import mysqlIcon from './image/mysql-logo-svgrepo-com.svg';

const Home = ({spanishContent,englishContent,english}) => {
  return (
    <Stack id="home">
      <Stack spacing={10}>
        <Flex height="300px" justifyContent="space-around" alignItems="center">
          <Stack spacing={4}>
            <Stack spacing={3}>
              <Heading fontWeight="700">{english? spanishContent.home.name : englishContent.home.name}</Heading>
              <Stack spacing={1}>
                <Text
                fontSize={{base:'lg', sm:'lg', md:'lg', lg:'xl'}}
                  fontWeight="600"
                  color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
                >
                  {english? spanishContent.home.description1 : englishContent.home.description1}
                </Text>
                <Text
                  fontWeight="300"
                  fontSize={{base:'md', sm:'md', md:'md', lg:'lg'}}
                  color={useColorModeValue("blackAlpha.700", "whiteAlpha.500")}
                >
                  {english? spanishContent.home.description2 : englishContent.home.description2}
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={4}>
              <Link
                href="https://www.linkedin.com/in/lucas-masini-10183913a/"
                target="_blank"
              >
                <IconButton icon={<FaLinkedin />} isRound="true" size="lg" />
              </Link>
              <Link href="https://github.com/lucasmasini" target="_blank">
                <IconButton icon={<FaGithub />} isRound="true" size="lg" />
              </Link>
            </Stack>
          </Stack>
          <Stack>
            <Image src={avatar} width="270px" borderRadius="10% / 50%" />
          </Stack>
        </Flex>
        <Stack spacing={12}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            padding="1.5em 1em"
          >
            <Image src={html5Icon} width="50px" />
            <Image src={cssIcon} width="50px" />
            <Image src={jsIcon} width="50px" />
            <Image src={reactIcon} width="50px" />
            <Image src={mysqlIcon} width="50px" />
            <Image src={nodeIcon} width="50px" />
            <Image src={sassIcon} width="50px" />
            <Image src={gitIcon} width="50px" />
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <Link href={curriculum} download={curriculum}>
              <Button
                variant={useColorModeValue("outline", "outline")}
                colorScheme={useColorModeValue("black", "pink")}
                leftIcon={<FaFileDownload />}
                width="190px"
                fontSize={'17px'}
              >
                {english? spanishContent.home.descarga : englishContent.home.descarga}
              </Button>
            </Link>
          </Stack>
        </Stack>
        <GoProjectsArrow />
      </Stack>
    </Stack>
  );
};

export default Home;
