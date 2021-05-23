import { CreateCandidateRequestAsync, GetCandidatesRequestAsync } from "../api/CandidateAPI";

const GetCandidatesAsync = async () => {
  var data = await GetCandidatesRequestAsync();

  return data.candidates;
};

const CreateCandidateAsync = async (values) => {
  const dob = Date.parse(values.dateOfBirth);

  values.dateOfBirth = 999999;

  await CreateCandidateRequestAsync(values);
}

export {
  GetCandidatesAsync,
  CreateCandidateAsync
};