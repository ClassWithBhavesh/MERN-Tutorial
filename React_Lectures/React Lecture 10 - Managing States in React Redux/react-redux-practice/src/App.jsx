import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrends } from './Features/trends/trendSlice';
import TrendList from './components/TrendList';
import Filters from './components/Filters';


function App() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.trends.status);

  useEffect(() => {
    dispatch(fetchTrends());
  }, [dispatch]);

  return (
    <div>
      <h2>AI Trend Signal Dashboard</h2>
      <Filters />
      {status === "Loading" && <p>Loading Trends</p>}

      <TrendList />
    </div>
  )
}

export default App
