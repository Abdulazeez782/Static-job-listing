import React from 'react'
import img1 from '../assets/images/photosnap.svg'
import img2 from '../assets/images/manage.svg'
import img3 from '../assets/images/account.svg'
import img4 from '../assets/images/myhome.svg'
import img5 from '../assets/images/loop-studios.svg'
import img6 from '../assets/images/faceit.svg'
import img7 from '../assets/images/shortly.svg'
import img8 from '../assets/images/insure.svg'
import img9 from '../assets/images/eyecam-co.svg'
import img10 from '../assets/images/the-air-filter-company.svg'


export const JobDetails = ({jobDetails, addtoFilter}) => {
    const images = [
        {id: 1, image: img1},
        {id: 2, image: img2},
        {id: 3, image: img3},
        {id: 4, image: img4},
        {id: 5, image: img5},
        {id: 6, image: img6},
        {id: 7, image: img7},
        {id: 8, image: img8},
        {id: 9, image: img9},
        {id: 10, image: img10}
    ]

  return (
    <main>
        {
            jobDetails.map((jobDetail, index) => {
                return (
                    <div key={index} className={`flex ${jobDetail.featured ? "left-border": ""}`}>
                        <article className="flex first-article">
                            <img src={images.find(image => image.id === jobDetail.id).image} alt="photosnap" />
                            <div>
                                <div className="job-properties">
                                    <span className="job-company">{jobDetail.company}</span>
                                    {jobDetail.new && <span className="job-new">NEW!</span> }
                                    {jobDetail.featured && <span className="job-feature">FEATURED</span>}                                   
                                </div>
                                <p>{jobDetail.position}</p>
                                <div className="job-conditions">
                                    <span>{jobDetail.postedAt}</span>
                                    <span>{jobDetail.contract}</span>
                                    <span>{jobDetail.location}</span>
                                </div>
                            </div>
                        </article>
            
            
                        <article className="filter-buttons">
                            <button onClick={() => addtoFilter({type: "role", value: jobDetail.role})}>{jobDetail.role}</button>
                            <button onClick={() => addtoFilter({type: "level", value: jobDetail.level})}>{jobDetail.level}</button>
                            {
                                jobDetail.languages.map((language, index) => {
                                    return (
                                        <button onClick={() => addtoFilter({type: "language", value: language})} key={index}>{language}</button>
                                    )                                    
                                })
                            }
                            
                            {
                                jobDetail.tools.map((tool, index) => {
                                    return (
                                        <button onClick={() => addtoFilter({type: "tool", value: tool})} key={index}>{tool}</button>
                                    )
                                })
                            }                            
                        </article>
                    </div>               
                )
            }) 
        }            
        
    </main>
  )
}
