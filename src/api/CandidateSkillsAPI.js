import APIKit from "./APIKit";

const GetSkillsForCandidateRequestAsync = async (id) => {
  var response = await APIKit.get(`/candidates/${id}/skills`);

  return response.data;
};

export {
  GetSkillsForCandidateRequestAsync
};