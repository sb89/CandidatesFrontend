import { CreateCandidateRequestAsync, GetCandidatesRequestAsync } from "../api/CandidateAPI";

const GetCandidatesAsync = async () => {
  var data = await GetCandidatesRequestAsync();

  return data.candidates;
};

const CreateCandidateAsync = async (values) => {
  const dob = Date.parse(values.dateOfBirth);
  const dobEpoch = Math.round(dob / 1000);

  const data = { ...values, dateOfBirth: dobEpoch }

  await CreateCandidateRequestAsync(data);
}

export {
  GetCandidatesAsync,
  CreateCandidateAsync
};