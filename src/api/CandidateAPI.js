import APIKit from "./APIKit";

const GetCandidatesRequestAsync = async () => {
  var response = await APIKit.get('/candidates');

  return response.data;
};

export {
  GetCandidatesRequestAsync
}