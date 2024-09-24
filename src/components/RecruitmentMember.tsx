import { Box, Text, useDisclosure } from "@chakra-ui/react";
import RecruitmentMemberWindow from "./RecruitmentMemberWindow";
import Member from "../entities/Member";

interface Props {
  member: Member;
}

const RecruitmentMember = ({ member }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="relative"
      display="inline-block"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Text cursor="help">{member?.MemberName}&nbsp;</Text>
      <RecruitmentMemberWindow isOpen={isOpen} member={member} />
    </Box>
  );
};

export default RecruitmentMember;
