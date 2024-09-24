import { Box } from "@chakra-ui/react";
import RecruitmentInput from "../components/RecruitmentInput";
import RecruitmentList from "../components/RecruitmentList";
import RecruitmentSearch from "../components/RecruitmentSearch";

const Recruitment = () => {
  return (
    <Box display="flex" flexDir="column" minHeight="calc(100vh - 100px)">
      <RecruitmentSearch />
      <RecruitmentList />
      <RecruitmentInput />
    </Box>
  );
};

export default Recruitment;
