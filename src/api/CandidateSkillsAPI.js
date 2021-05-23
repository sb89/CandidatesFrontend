import APIKit from "./APIKit";

const GetSkillsForCandidateRequestAsync = async (id) => {
  var response = await APIKit.get(`/candidates/${id}/skills`);

  return response.data;
};

const AddSkillToCandidateRequestAsync = async (candidateId, skillId) => {
  var data = {
    candidateId: candidateId, 
    skillId: skillId
  };

  await APIKit.post(`/candidates/${candidateId}/skills`, data);
};

const RemoveSkillFromCandidateRequestAsync = async (candidateId, skillId) => {
  await APIKit.delete(`/candidates/${candidateId}/skills/${skillId}`);
}

export {
  GetSkillsForCandidateRequestAsync,
  AddSkillToCandidateRequestAsync,
  RemoveSkillFromCandidateRequestAsync
};