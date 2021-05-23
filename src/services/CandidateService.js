import { GetCandidatesRequestAsync } from "../api/CandidateAPI";

const GetCandidatesAsync = async () => {
  var data = await GetCandidatesRequestAsync();

  return data.candidates;
};

export {
  GetCandidatesAsync
};