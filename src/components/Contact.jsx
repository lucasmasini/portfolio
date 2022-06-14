import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Stack,
  FormLabel,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
  Textarea,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

import { BiMailSend } from "react-icons/bi";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("hbaMxPkEAImYPTG0O");

import contactImage from "./image/talking.png";

const Contact = ({spanishContent,englishContent,english}) => {
  const form = useRef();

  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_njdqnmm",
        "template_pz8cnx9",
        form.current,
        "hbaMxPkEAImYPTG0O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.message);
        }
      );
    e.target.reset();
    setResult(true);
  };

  const notificationAddProduct = ()=> {
    Toastify({
        text: english? spanishContent.contacto.confirmacion : englishContent.contact.confirmacion,
        duration: 2300,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        width:'60px',
        style: {
            background: "#154360",
            borderRadius: "11px",
            border: "1px solid #2874A6"
        }
    }).showToast();
  }

  return (
    <Stack id="contact" justifyContent="space-around" spacing={20}>
      <Stack alignItems="center">
        <Heading>{english? spanishContent.contacto.title : englishContent.contact.title}</Heading>
      </Stack>
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack
          width={{ base: "100%", sm: "100%", md: "100%", lg: "500px" }}
          spacing={6}
          marginBottom={'15px'}
        >
          <form ref={form} onSubmit={sendEmail}>
            <Stack spacing={8}>
              <Stack>
                <FormLabel>{english? spanishContent.contacto.nombre : englishContent.contact.nombre}</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<ChatIcon />}
                  />
                  <Input
                    type="text"
                    name="user_name"
                    required
                    border="1px solid"
                    variant={useColorModeValue("filled", "outline")}
                    borderColor={useColorModeValue(
                      "transparent",
                      "whiteAlpha.300"
                    )}
                    _hover={useColorModeValue(
                      { borderColor: "gray.500" },
                      { borderColor: "whiteAlpha.400" }
                    )}
                  />
                </InputGroup>
                <FormLabel>{english? spanishContent.contacto.mail : englishContent.contact.mail}</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon />}
                  />
                  <Input
                    type="email"
                    name="user_email"
                    required
                    border="1px solid"
                    variant={useColorModeValue("filled", "outline")}
                    borderColor={useColorModeValue(
                      "transparent",
                      "whiteAlpha.300"
                    )}
                    _hover={useColorModeValue(
                      { borderColor: "gray.500" },
                      { borderColor: "whiteAlpha.400" }
                    )}
                  />
                </InputGroup>
                <FormLabel>{english? spanishContent.contacto.telefono : englishContent.contact.telefono}</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon />}
                  />
                  <Input
                    type="text"
                    name="user_phone"
                    required
                    border="1px solid"
                    variant={useColorModeValue("filled", "outline")}
                    borderColor={useColorModeValue(
                      "transparent",
                      "whiteAlpha.300"
                    )}
                    _hover={useColorModeValue(
                      { borderColor: "gray.500" },
                      { borderColor: "whiteAlpha.400" }
                    )}
                  />
                </InputGroup>
                <FormLabel marginY={2}>{english? spanishContent.contacto.mensaje : englishContent.contact.mensaje}</FormLabel>
                <Textarea
                  name="message"
                  required
                  border="1px solid"
                  variant={useColorModeValue("filled", "outline")}
                  borderColor={useColorModeValue(
                    "transparent",
                    "whiteAlpha.300"
                  )}
                  _hover={useColorModeValue(
                    { borderColor: "gray.500" },
                    { borderColor: "whiteAlpha.400" }
                  )}
                />
              </Stack>
              <Button
                rightIcon={<BiMailSend />}
                colorScheme={useColorModeValue("", "pink")}
                variant={useColorModeValue("outline", "outline")}
                type="submit"
                onClick={()=>notificationAddProduct()}
              >
                {english? spanishContent.contacto.enviar : englishContent.contact.enviar}
              </Button>
            </Stack>
          </form>
        </Stack>
        <Stack display={{base: 'none', sm: "none", md: "none", lg:"flex", xl:'flex'}}>
          <Image
            src={contactImage}
            alt="Illustrative Image Contact"
            w="300px"
            filter={useColorModeValue(
              "invert(8%) sepia(7%) saturate(3272%) hue-rotate(181deg) brightness(95%) contrast(90%)",
              "invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
            )}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
