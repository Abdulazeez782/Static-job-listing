import React from 'react'
import imgRemove from '../assets/images/icon-remove.svg'

export const Header = ({filter, deleteFilter, clearFilter}) => {
  return (
    <header>

        {
            filter.length > 0 && <div className="flex">                 
            <div className="flex filters">
                {filter.map(filterValue => {
                    return (
                        <p>
                            <span>{filterValue.value}</span>
                            <button onClick={() => deleteFilter(filterValue)}>
                                <img src={imgRemove} alt="" />
                            </button>
                        </p>
                    )
                })}

               
            </div>

            <div>
                <button onClick={clearFilter} className="btn-clear">Clear</button>
            </div>
        </div>
        }
        
    </header>
  )
}
