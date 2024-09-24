import { Box, Text, useDisclosure } from "@chakra-ui/react";
import Relic from "../entities/Relic";
import RecruitmentRelicWindow from "./RecruitmentRelicWindow";

interface Props {
  relic: Relic;
}

function getRelicColor(relic: string) {
  return relic.includes("Lith")
    ? "#1abc90"
    : relic.includes("Meso")
    ? "#358cdb"
    : relic.includes("Neo")
    ? "#e74c3d"
    : "#e5c00f";
}

const RecruitmentRelic = ({ relic }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="relative"
      display="inline-block"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Text cursor="help" color={getRelicColor(relic.Relic)}>
        {relic.Relic}&nbsp;
      </Text>
      <RecruitmentRelicWindow isOpen={isOpen} relic={relic} />
    </Box>
  );
};

export default RecruitmentRelic;
