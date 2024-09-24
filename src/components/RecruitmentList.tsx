import { Spinner, List } from "@chakra-ui/react";
import RecruitmentPostListItem from "./RecruitmentPostListItem";
import useSquadCombine from "../hooks/useSquadCombine";
import React from "react";

const RecruitmentList = () => {
  const { squads, isLoading, error } = useSquadCombine();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List paddingBottom="60px" zIndex={1}>
      {squads?.map((s) => (
        <React.Fragment key={s.SquadID}>
          <RecruitmentPostListItem recruitmentPost={s} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RecruitmentList;
