import {
  Stack,
  Link,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import personIcon from './image/programador.png';

const Nav = ({spanishContent,englishContent,english}) => {
  return (
    <Stack
      paddingY="24px"
      direction="row"
      alignItems="center"
      justifyContent={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "space-between",
      }}
      borderBottom={useColorModeValue("1px solid #000000", "1px solid")}
    >
      <Stack direction="row">
        <Stack
          display={{ base: "none", sm: "none", md: "none", lg: 'flex'}} 
          width={'55px'}
          margin={'0px 0px 0px 5px'}
        >
          <Image src={personIcon} width="100%"/>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        fontWeight="600"
        spacing="26px"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        fontSize={{lg:'18px'}}
      >
        <Link href="#home">{english? spanishContent.nav.inicio : englishContent.nav.inicio}</Link>
        <Link href="#projects">{english? spanishContent.nav.proyectos : englishContent.nav.proyectos}</Link>
        <Link href="#about">{english? spanishContent.nav.conoceme : englishContent.nav.conoceme}</Link>
        <Link href="#contact">{english? spanishContent.nav.contacto : englishContent.nav.contacto}</Link>q
      </Stack>
    </Stack>
  );
};

export default Nav;
