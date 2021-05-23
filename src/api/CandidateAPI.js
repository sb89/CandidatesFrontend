import APIKit from "./APIKit";

const GetCandidatesRequestAsync = async () => {
  var response = await APIKit.get('/candidates');

  return response.data;
};

const CreateCandidateRequestAsync = async (values) => {
  await APIKit.post('/candidates', values);
}

export {
  GetCandidatesRequestAsync,
  CreateCandidateRequestAsync
}