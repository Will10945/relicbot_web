import { Box, Text } from "@chakra-ui/react";
import Member from "../entities/Member";

interface Props {
  isOpen: boolean;
  member: Member;
}

const RecruitmentMemberWindow = ({ isOpen, member }: Props) => {
  if (!isOpen) return;

  return (
    <Box
      position="absolute"
      top="100%"
      left="0"
      mt="2"
      px="4px"
      bg="gray.700"
      color="white"
      borderRadius="md"
      boxShadow="md"
      zIndex="100"
      width="max-content"
      maxW="400px"
    >
      {member &&
        Object.entries(member).map((e, i) => (
          <Text key={i}>{`${e[0]}: ${e[1]}`}</Text>
        ))}
    </Box>
  );
};

export default RecruitmentMemberWindow;
