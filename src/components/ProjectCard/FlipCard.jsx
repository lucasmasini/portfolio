import { Button, Image, Link, Stack } from "@chakra-ui/react";
import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useParams } from "react-router-dom";

const contentText = {
  spanish:{
    repositorio: 'Ir al repositorio',
    pagina:'Ir al sitio'
  },
  English:{
    repository: 'Go to repository',
    page:'Go to the site'
  }
}

const FlipCard = ({ image, alt, deploy, repo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Stack onMouseEnter={handleHover} width="300px">
        <Link>
          <Image
            src={image}
            alt={alt}
            borderRadius="20px 20px 0 0"
            width="100%"
            height="203.2px"
          />
        </Link>
      </Stack>

      <Stack
        onMouseLeave={handleHover}
        width="300px"
        height="203.2px"
        justifyContent="center"
        alignItems="center"
        borderRadius="20px 20px 0 0"
        bgGradient="linear(to-b,blackAlpha.500, transparent)"
      >
        <Stack width="150px">
          <Button background={"#2471A3"} color={'whiteAlpha.900'}>
            <Link href={deploy} target="_blank">
            Sitio web
            </Link>
          </Button>

          <Button background={"#2E4053"} color={'whiteAlpha.900'}>
            <Link href={repo} target="_blank">
              Repositorio
            </Link>
          </Button>
        </Stack>
      </Stack>
    </ReactCardFlip>
  );
};

export default FlipCard;
