/* eslint-env jest */
import sinon from 'sinon';
import assert from 'assert';
import GithubApi from './github';
import * as issues from './mockData/orgIssues'
import * as comments from './mockData/comments/MyBit-DDF.website_3';

it('returns the issues', () => {
    return GithubApi.getOrgIssues().then(data => assert(data, issues));
});

it('returns the comments', () => {
    return GithubApi.getCommentsOfIssue('MyBit-DDF.website', 3).then(data => assert(data, comments));
});
