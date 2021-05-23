import { GetSkillsRequestAsync } from "../api/SkillAPI";

const GetSkillsAsync = async () => {
  var data = await GetSkillsRequestAsync();

  return data.skills;
};

export { 
  GetSkillsAsync
}