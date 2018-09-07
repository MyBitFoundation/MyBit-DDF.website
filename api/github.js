const GithubApi = {
  getCommentsOfIssue: (repoName, number) =>
    new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(require(`./mockData/comments/${repoName}_${number}`))
        }, 1000)
      } catch (error) {
        reject(error);
      }
    })
  ,
  getOrgIssues: () =>
    new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(require('./mockData/orgIssues'))
        }, 1000)
      } catch (error) {
        reject(error);
      }
    })
  ,
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
