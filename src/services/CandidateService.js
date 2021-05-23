import { CreateCandidateRequestAsync, GetCandidateRequestAsync, GetCandidatesRequestAsync } from "../api/CandidateAPI";

const GetCandidatesAsync = async () => {
  const data = await GetCandidatesRequestAsync();

  return data.candidates;
};

const GetCandidateAsync = async (id) => {
  const data = await GetCandidateRequestAsync(id);

  return data;
};

const CreateCandidateAsync = async (values) => {
  const dob = Date.parse(values.dateOfBirth);
  const dobEpoch = Math.round(dob / 1000);

  const data = { ...values, dateOfBirth: dobEpoch }

  await CreateCandidateRequestAsync(data);
}

export {
  GetCandidatesAsync,
  CreateCandidateAsync,
  GetCandidateAsync
};