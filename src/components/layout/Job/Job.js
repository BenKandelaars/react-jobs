import React from 'react';
import Navbar from '../../presentational/Navbar';
import JobDetailsContainer from '../../container/JobDetails/JobDetailsContainer';
import { Sitemap } from '../../presentational/Sitemap/Sitemap';

//    <Footer />
//    <div>
//     <p>Job Offer View</p>
//     <p>{JSON.stringify(this.props.location)}</p>
//   </div>

export default function Job() {
  // Mock hash
  const mockProps = { hash: '#3241521515' };

  return (
    <div>
      <Navbar />
      <JobDetailsContainer hash={mockProps.hash} />
      <Sitemap />
    </div>
  );
}
