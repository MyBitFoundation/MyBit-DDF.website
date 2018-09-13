import axios from 'axios';
const END_POINT = "https://githubmybitio-cgcavnqtrq.now.sh"

const GithubApi = {
  getOrgIssues: async () => {
    const response = await axios(END_POINT + "/api/issues")
    return response.data;
  },
}

export default GithubApi;
