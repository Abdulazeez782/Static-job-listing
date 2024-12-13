
import { useState } from 'react';
import './App.scss';
import jobsData from './assets/data.json'
import { Header } from './Components/Header';
import { Main } from './Components/Main';


function App() {
  const [jobs, setJobs] = useState(jobsData);
  const [filters, setFilters] = useState([]);

  const filterJobs = (jobs, updatedFilter) => {

    const filteredJobs = jobs.filter(job => {
      let roleCheck, levelCheck, toolCheck, languageCheck = false;

      if(updatedFilter.some(filter => filter.type === "role")) {
       roleCheck = true;
      }
      if(updatedFilter.some(filter => filter.type === "level")) {
       levelCheck = true;
      }
      if(updatedFilter.some(filter => filter.type === "tool")) {
       toolCheck = true;
      }
      if(updatedFilter.some(filter => filter.type === "language")) {
       languageCheck = true;
      }

      return (
       (roleCheck ? job.role === updatedFilter.find(filter => filter.type === "role").value: true) &&
       (levelCheck ? job.level === updatedFilter.find(filter => filter.type === "level").value: true) &&
       (toolCheck ? updatedFilter.filter(f => f.type === "tool").every(f => job.tools.indexOf(f.value) > -1) : true)&&
       (languageCheck ? updatedFilter.filter(f => f.type === "language").every(f => job.languages.indexOf(f.value) > -1) : true)
      )
   })
   
   setJobs(filteredJobs);
  }

  const addFilter = (filterValue) => {
    const dataExisting = filters.some(filter => filter.type === filterValue.type && filter.value === filterValue.value)    
    if (!dataExisting) {
      const updatedFilter = [...filters, filterValue];      
      
      setFilters(updatedFilter)
      filterJobs(jobs, updatedFilter);
    }
  }

  const clearFilter = () => {
    
    setFilters([]);
    setJobs(jobsData);
  }

  const deleteFilter = (value) => {
    const updatedFilter = filters.filter((filterItem) => {
      return(filterItem.value !== value.value)
    })

    setFilters(updatedFilter);
    filterJobs(jobsData, updatedFilter);
    console.log(jobsData);
    
  }

  return ( 
    <>
      <Header filter={filters} deleteFilter={deleteFilter} clearFilter={clearFilter}/>
      <Main jobs={jobs} addFilter={addFilter}/>
    </>
    
  );
}

export default App;
