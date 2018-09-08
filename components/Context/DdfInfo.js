import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import axios from 'axios';
import DdfInfoContext from './DdfInfoContext';
import { Repos, IssuesCategories as Categories } from '../../constants';
import ethereumRegex from 'ethereum-regex';

export default class DdfInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [{
        name:"Total Value of Fund",
        loadingSize: "130"
      }, {
        name: "Total Payout",
        loadingSize: "130"
      }, {
        name: "Open Tasks",
        loadingSize: "50"
      }, {
        name: "Completed Tasks",
        loadingSize: "50"
      }, {
        name: "No. of Contributors",
        loadingSize: "50"
      }],
      selectedCategory: "Development",
      categories: [],
      showCompletedTasks: false,
      setCategory: this.setCategory.bind(this),
      handleClickedFilter: this.handleClickedFilter.bind(this),
      handleShowCompletedTasks: this.handleShowCompletedTasks.bind(this),
    }

    this.organizeIssues = this.organizeIssues.bind(this);
  }

  handleShowCompletedTasks(showCompletedTasks){
    this.setState({showCompletedTasks})
  }

  handleClickedFilter(name, checked){
    let tmpIssues = Object.assign({}, this.state.issues);
    tmpIssues[this.state.selectedCategory].filters[name] = checked;
    this.setState({issues: tmpIssues});
  }

  setCategory(selectedCategory){
    if(this.state.selectedCategory !== selectedCategory){
      this.setState({selectedCategory})
    }
  }

 /*
 * this method splits issues by categories and also sets it up so that
 + its easy to handle the state of each filter
 */
 organizeIssues(issues){
    let processedIssues = {};
    let categories = [];

    //isues that don't have a bounty
    issues.filter(issue => issue.contractAddress === -1);

    issues.forEach(issue => {
      const category = issue.category;
      if(!processedIssues[category]){
        processedIssues[category] = {issues: [issue], filters:{}};
        categories.push(category);
      }
      else{
        processedIssues[category].issues.push(issue);
      }
      issue.labels.forEach(label => {
        //if the user has toggled the filter off before then let it be
        if(this.state.issues && this.state.issues[category] && this.state.isssues[category].filters[label] === false){
          processedIssues[category].filters[label] = false;
        }
        else if(processedIssues[category].filters[label] === undefined){
          //filters always start off as checked
          processedIssues[category].filters[label] = true;
        }
      })
    });

    this.setState({issues: processedIssues, categories})
 }

 getContractAddress(issue, comments){
  //TODO Change from owner to status' username once jose implements the end point
  comments.filter(comment => comment.author_association === "OWNER");
  let contractAddress = -1;
  let match = comments[0].body.match(ethereumRegex());
  if(match && match.length > 0){
    contractAddress = match[0];
  }
  return {
    ...issue,
    contractAddress,
    value: "$100"
  };
 }

async getCommentsOfIssue(repoName, number){
  return new Promise(async (resolve, reject) => {
    axios.get(`https://api.github.com/repos/csmartinsfct/${repoName}/issues/${number}/comments?access_token=573dbede2e9766fd4d41610d15a8b82371fd522a`)
      .then(function (response) {
        // handle success
       resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    })
 }

 getCategory(repoName){
  if(repoName.indexOf("tech") !== -1 || repoName.indexOf("website") !== -1)
    return "Development";
  else if(repoName.indexOf("design") !== -1){
    return "Design";
  }
  else if(repoName.indexOf("marketing") !== -1)
    return "Marketing";
  //TODO Remove after implementing jose's end point - just because my repos don't have these new names yet :x
  else if(repoName === "MyBit-Go")
    return "Development";
  else
    return "Design";
}

 async getIssues(){
  try{
    let issuesTmp = await Promise.all(Repos.map(async (repoName) =>
      axios.get(`https://api.github.com/repos/csmartinsfct/${repoName}/issues?access_token=573dbede2e9766fd4d41610d15a8b82371fd522a`)
        .then(response => {
          const data = response.data;
          return data.map(issue => {
            let indexOf = issue.html_url.indexOf('/issues');
            const repoUrl = issue.html_url.substring(0, indexOf + 1);
            const labels = issue.labels.map(label => label.name);
            const repoName = issue.html_url.split('/')[4];
            const category = this.getCategory(repoName);
            return {
              issueUrl: issue.html_url,
              title: issue.title,
              createdAt: issue.created_at,
              number: issue.number,
              state: issue.state,
              repoUrl: repoUrl,
              repoName: repoName,
              labels,
              category,
            }
          })
        })
        .catch(function (error) {
          throw error;
        })
    ))

    //This won't be the case in production since we'll use a different endpoint that returns all issues
    //I'm testing pulling issues from two different repos atm so need to merge the arrays
    let issues = issuesTmp[0].concat(issuesTmp[1]);

    issues = await Promise.all(issues.map(async issue => {
      const comments = await this.getCommentsOfIssue(issue.repoName, issue.number);

      //TODO get value from contract address
      return this.getContractAddress(issue, comments);
    }));

    this.organizeIssues(issues);

  }catch(err){
    setTimeout(this.getIssues, 2000);
  }
 }

 getStats(){
  const stats = [{
        name:"Total Value of Fund",
        value: "$896,950.00",
        loadingSize: "130"
      }, {
        name: "Total Payout",
        value: "$103,050.00",
        loadingSize: "130"
      }, {
        name: "Open Tasks",
        value: "219",
        loadingSize: "50"
      }, {
        name: "Completed Tasks",
        value: "36",
        loadingSize: "50"
      }, {
        name: "No. of Contributors",
        value: "9",
        loadingSize: "50"
      }
    ]

    new Promise(async (resolve, reject) => {
      setTimeout(() =>
        this.setState({stats: stats})
      , 1000);
    });
  }

  componentDidMount() {
    this.getStats();
    this.getIssues();
  }

  render() {
    return (
      <DdfInfoContext.Provider value={this.state}>
        {this.props.children}
      </DdfInfoContext.Provider>
    );
  }
}

DdfInfo.propTypes = {
  children: PropTypes.node.isRequired,
};
