import { Grid, GridItem, Flex, Box, Text, Heading } from "@chakra-ui/react";
import SocketContext from "../contexts/SocketContext";
import { useContext } from "react";

const HomePage = () => {
  const { socket, uid, users } = useContext(SocketContext).SocketState;

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="main">
        <Heading
          textAlign="center"
          marginY={5}
          fontSize="7xl"
          // className="relicsrun-heading"
          width="max-content"
          alignSelf="center"
          margin="auto"
        >
          Welcome to Relics.Run!
        </Heading>
        <Text padding={6}>
          <h2>Socket IO Info</h2>
          <p>
            Your user ID: <strong>{uid}</strong>
            <br />
            Users online: <strong>{users.length}</strong>
            <br />
            Socket ID: <strong>{socket?.id}</strong>
            <br />
          </p>
        </Text>
        <Box paddingLeft={2}>
          <Flex marginBottom={5}></Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
