import { AddSkillToCandidateRequestAsync, GetSkillsForCandidateRequestAsync } from "../api/CandidateSkillsAPI";

const GetSkillsForCandidateAsync = async (id) => {
  const data = await GetSkillsForCandidateRequestAsync(id);

  return data.skills;
};

const AddSkillToCandidateAsync = async (candidateId, skillId) => {
  await AddSkillToCandidateRequestAsync(candidateId, skillId);
}

export {
  GetSkillsForCandidateAsync,
  AddSkillToCandidateAsync
}