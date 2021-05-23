import { CreateCandidateRequestAsync, GetCandidateRequestAsync, GetCandidatesRequestAsync, UpdateCandidateRequestAsync } from "../api/CandidateAPI";

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

  const data = { ...values, dateOfBirth: dobEpoch };

  await CreateCandidateRequestAsync(data);
}

const UpdateCandidateAsync = async (candidate) => {
  const dob = Date.parse(candidate.dateOfBirth);
  const dobEpoch = Math.round(dob / 1000);

  const data = { ...candidate, dateOfBirth: dobEpoch };

  await UpdateCandidateRequestAsync(data);
}

export {
  GetCandidatesAsync,
  CreateCandidateAsync,
  GetCandidateAsync,
  UpdateCandidateAsync
};