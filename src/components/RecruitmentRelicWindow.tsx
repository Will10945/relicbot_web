import Relic from "../entities/Relic";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  relic: Relic;
}

const RecruitmentRelicWindow = ({ isOpen, relic }: Props) => {
  const { ID, Era, Name, ...relicView } = relic;
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
      {Object.entries(relicView).map((e, i) => (
        <Text key={i}>{`${e[0]}: ${e[1]}`}</Text>
      ))}
    </Box>
  );
};

export default RecruitmentRelicWindow;
