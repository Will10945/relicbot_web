import RecruitmentPost from "../entities/RecruitmentPost";
import APIClient from "../services/api-client";
import parseRecruitmentInputs from "../services/parseRecruitmentInput";


const apiClient = new APIClient<RecruitmentPost>('/squads');

const useNewRecruitmentPosts = (recruitmentPosts: string, uid: string) => {

    parseRecruitmentInputs(recruitmentPosts, uid);

}

export default useNewRecruitmentPosts;