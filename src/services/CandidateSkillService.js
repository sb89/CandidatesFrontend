import { GetSkillsForCandidateRequestAsync } from "../api/CandidateSkillsAPI";

const GetSkillsForCandidateAsync = async (id) => {
  const data = await GetSkillsForCandidateRequestAsync(id);

  return data.skill;
};

export {
  GetSkillsForCandidateAsync
}