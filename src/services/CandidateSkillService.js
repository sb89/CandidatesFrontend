import { AddSkillToCandidateRequestAsync, GetSkillsForCandidateRequestAsync, RemoveSkillFromCandidateRequestAsync } from "../api/CandidateSkillsAPI";

const GetSkillsForCandidateAsync = async (id) => {
  const data = await GetSkillsForCandidateRequestAsync(id);

  return data.skills;
};

const AddSkillToCandidateAsync = async (candidateId, skillId) => {
  await AddSkillToCandidateRequestAsync(candidateId, skillId);
}

const RemoveSkillFromCandidateAsync = async (candidateId, skillId) => {
  await RemoveSkillFromCandidateRequestAsync(candidateId, skillId);
};

export {
  GetSkillsForCandidateAsync,
  AddSkillToCandidateAsync,
  RemoveSkillFromCandidateAsync
}