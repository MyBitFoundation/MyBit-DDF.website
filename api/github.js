import axios from 'axios';
const END_POINT = "https://githubmybitio-ebnmplgtcq.now.sh"

const GithubApi = {
  getOrgIssues: async () => {
    const response = await axios(END_POINT + "/api/issues")
    return response.data;
  },
  getStats: () =>
    new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          resolve({
            totalValue: "$896,950.00",
            totalPayout: "$103,050.00",
            contributors: 80
          })
        }, 1000)
      } catch (error) {
        reject(error);
      }
    })
}

export default GithubApi;
