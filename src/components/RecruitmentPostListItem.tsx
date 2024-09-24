import { Box, ListItem, Text } from "@chakra-ui/react";
import RecruitmentRelic from "./RecruitmentRelic";
import RecruitmentMember from "./RecruitmentMember";
import useRecruitmentSearchQueryStore from "../stores/recruitmentPostQuerystore";
import filterRecruitmentPosts from "../services/filterRecruitmentPosts";
import RecruitmentPost from "../entities/RecruitmentPost";
import React from "react";

interface Props {
  recruitmentPost: RecruitmentPost;
}

const RecruitmentPostListItem = ({ recruitmentPost }: Props) => {
  const searchText =
    useRecruitmentSearchQueryStore().recruitmentPostQuery.searchText || "";
  var matches;
  try {
    const searchTextRegex = new RegExp(searchText.toLowerCase());
    matches = filterRecruitmentPosts(recruitmentPost, searchTextRegex);
  } catch {
    matches = true;
  }

  return (
    <ListItem className="rec-list-item" minWidth="max-content">
      <Box
        display="flex"
        flexDir="row"
        opacity={!matches ? "30%" : "100%"}
        minW="max-content"
      >
        <RecruitmentMember member={recruitmentPost.Host} />
        <Text>hosts:&nbsp;</Text>
        {recruitmentPost.Relics.Oncycle.map((r) => (
          <React.Fragment key={r.ID}>
            <RecruitmentRelic relic={r} />
          </React.Fragment>
        ))}
        <Text>{`${recruitmentPost.Style}`}&nbsp;</Text>
        <Text>{`${recruitmentPost.Refinements.Oncycle.map((r) => r.Name).join(
          ", "
        )}`}</Text>
      </Box>
    </ListItem>
  );
};

export default RecruitmentPostListItem;
