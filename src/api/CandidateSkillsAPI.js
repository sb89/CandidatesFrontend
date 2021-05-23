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

export {
  GetSkillsForCandidateRequestAsync,
  AddSkillToCandidateRequestAsync
};