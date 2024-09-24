import { Button, Heading, HStack, Image } from "@chakra-ui/react";
import vrc_rainbow from "../assets/vrc_rainbow.webp";
import ColorModeSwitch from "./ColorModeSwitch";
// import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack
      paddingY={3}
      marginX={5}
      className="navbar"
      as="header"
      height="max-content"
    >
      <Link to="/">
        <HStack width="max-content">
          <Image
            src={vrc_rainbow}
            boxSize="60px"
            objectFit="cover"
            borderRadius={10}
          />
          <Heading
            paddingLeft="25px"
            fontSize="50px"
            fontStyle="bold"
            className="relicsrun-heading"
          >
            Relics.Run
          </Heading>
        </HStack>
      </Link>
      <Link to="/recruitment">
        <Button marginX={10}>Recruitment</Button>
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
