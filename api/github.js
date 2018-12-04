import axios from 'axios';
const END_POINT = "https://pull-27-github-mybit-io-dev.now.sh";

import getConfig from 'next/config';

const GithubApi = {
  getOrgIssues: async () => {
    const { publicRuntimeConfig } = getConfig();
    const isOffline = publicRuntimeConfig.offlineMode;
    const url = isOffline 
      ? `/api/local-issues`
      : `${END_POINT}/api/issues `;
      
    const response = await axios(url)
    return response.data;
  },
}

export default GithubApi;
