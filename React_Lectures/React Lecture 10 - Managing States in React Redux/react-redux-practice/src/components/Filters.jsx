import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../Features/trends/trendSlice';

function Filters() {

    const dispatch = useDispatch();
  return (
    <select onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Business">Business</option>
        <option value="AI">AI</option>
    </select>
  )
}

export default Filters