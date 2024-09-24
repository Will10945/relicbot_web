import { Box, HStack, Input, InputGroup, Text } from "@chakra-ui/react";
import { useRef } from "react";
import useRecruitmentSearchQueryStore from "../stores/recruitmentPostQuerystore";

const RecruitmentSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useRecruitmentSearchQueryStore((s) => s.setSearchText);
  const st =
    useRecruitmentSearchQueryStore().recruitmentPostQuery.searchText || "";
  var valid = true;
  try {
    RegExp(st);
  } catch {
    valid = false;
  }

  return (
    <HStack
      position="sticky"
      top="0"
      //   width="50%"
      //   mr="0"
      //   ml="auto"
      zIndex={10}
      justifyContent="space-between"
      bg="gray.900"
      opacity="100%"
      height="max-content"
      borderBottom="solid"
      borderBottomWidth="1px"
      borderBottomColor="#1f1f1f"
      marginBottom={1}
    >
      <Text fontSize="5xl" fontWeight="bold">
        Recruitment
      </Text>
      <Box width="50%">
        <form
          onChange={(event) => {
            event.preventDefault();
            if (ref.current) setSearchText(ref.current.value);
          }}
        >
          <InputGroup>
            <Input
              ref={ref}
              placeholder="Search Existing Hosts"
              variant="filled"
              focusBorderColor={!valid ? "firebrick" : "#0751CB"}
            />
          </InputGroup>
        </form>
      </Box>
    </HStack>
  );
};

export default RecruitmentSearch;
