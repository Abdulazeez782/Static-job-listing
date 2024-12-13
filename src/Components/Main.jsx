import React from 'react'
import { JobDetails } from './JobDetails'

export const Main = ({jobs, addFilter}) => {
  return (
    <JobDetails jobDetails={jobs} addtoFilter={addFilter}/>
  )
}
