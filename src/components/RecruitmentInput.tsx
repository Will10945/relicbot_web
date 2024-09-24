import { Box, Button, HStack, InputGroup, Textarea } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useNewRecruitmentPosts from "../hooks/useNewRecruitmentPosts";
import SocketContext from "../contexts/SocketContext";

const RecruitmentInput = () => {
  const { uid } = useContext(SocketContext).SocketState;
  const [recInput, setRecInput] = useState("");

  const handleSubmit = (event: any, force?: boolean) => {
    if (event.key === "Enter" || force) {
      if (event.shiftKey) {
        setRecInput(recInput + "\n");
        event.preventDefault();
      } else {
        setRecInput("");
        if (recInput.replace("\n", "")) useNewRecruitmentPosts(recInput, uid);
        event.preventDefault();
      }
    }
  };

  return (
    <HStack
      position="fixed"
      height="fit-content"
      bottom={0}
      width="100%"
      padding={0}
      paddingBottom={2}
      spacing="0"
      bg="gray.900"
      opacity="100%"
      zIndex={1000}
    >
      <Box width="fit-content" m="10px">
        <BsSearch />
      </Box>
      <form onKeyDown={handleSubmit} style={{ width: "100%", opacity: "100%" }}>
        <InputGroup opacity="100%">
          <Textarea
            height="150px"
            borderLeftRadius={10}
            borderRightRadius={0}
            placeholder="Host relics here!  ex. Axi L4 4b4r"
            variant="filled"
            opacity="100%"
            onChange={(e) => setRecInput(e.currentTarget.value)}
            value={recInput}
            resize="vertical"
            size="sm"
          />
        </InputGroup>
      </form>
      <Button
        children={<BsSearch size={25} />}
        onClick={(event) => {
          handleSubmit(event, true);
        }}
        width="5%"
        borderRightRadius={10}
        borderLeftRadius={0}
        height="150px"
      />
    </HStack>
  );
};

export default RecruitmentInput;
