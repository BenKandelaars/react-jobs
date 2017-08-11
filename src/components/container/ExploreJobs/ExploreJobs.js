import React, { Component } from 'react';
import JobCard from '../../presentational/JobCard';
import data from '../../../data.json';
import { ExploreJobsContainer, SearchForm, JobCardContainer, ResultsText } from './styles';

class ExploreJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      searchterm: '',
      jobs: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      jobs: data.jobs,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchterm: this.state.inputValue,
    });
  }

  renderNumberOfResults(results, searchterm) {
    return <ResultsText>{`Found ${results} matches for "${searchterm}"`}</ResultsText>;
  }

  renderNoResults() {
    return (
      <ResultsText>No jobs currently match you search, but we're constantly adding new ones. Join our community to stay updated!</ResultsText>
    );
  }

  render() {
    let jobs = [];
    if (this.state.searchterm) {
      jobs = this.state.jobs
        .filter(job => job.title.toUpperCase().includes(this.state.searchterm.toUpperCase()))
        .map((job, i) => <JobCard key={i} {...job} />);
    } else {
      jobs = this.state.jobs.map((job, i) => <JobCard key={i} {...job} />);
    }

    return (
      <ExploreJobsContainer>
        <h1>Explore jobs</h1>
        <SearchForm onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={e => this.setState({ inputValue: e.target.value })}
            value={this.state.inputValue}
            placeholder="Search by job title"
          />
          <button>
            <i className="fa fa-search" />
            Search
          </button>
        </SearchForm>
        {(jobs.length && this.state.searchterm) ?
          this.renderNumberOfResults(jobs.length, this.state.searchterm) :
          null
        }
        {(jobs.length === 0) && this.renderNoResults()}
        <JobCardContainer>
          {jobs}
        </JobCardContainer>
      </ExploreJobsContainer>
    );
  }
}

export default ExploreJobs;