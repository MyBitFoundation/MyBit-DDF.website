import axios from 'axios';
const END_POINT = "http://localhost:9001"

import getConfig from 'next/config';

const GithubApi = {
  getOrgIssues: async () => {
    const { publicRuntimeConfig } = getConfig();
    const url = publicRuntimeConfig.offlineMode ? "/api/local-issues" : "/api-issues";
    const response = await axios(END_POINT + url)
    return response.data;
  },
}

export default GithubApi;
