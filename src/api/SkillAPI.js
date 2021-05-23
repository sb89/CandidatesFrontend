import APIKit from "./APIKit";

const GetSkillsRequestAsync = async () => {
  var response = await APIKit.get('/skills');

  return response.data;
};

export { 
  GetSkillsRequestAsync 
}