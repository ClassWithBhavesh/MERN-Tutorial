import {useSelector, useDispatch} from "react-redux";
import {saveTrend} from "../Features/trends/trendSlice";
import { useCallback, useMemo } from "react";
import TrendCard from "./TrendCard";

function TrendList() {
    const {items, filter} = useSelector((state) => state.trends)
    const dispatch = useDispatch();

    const handleSave = useCallback((id) => {
        dispatch(saveTrend(id));
    }, [dispatch]);

    const filteredTrends = useMemo(() => {
        if(filter === "All") return items;

        return items.filter((t) => t.category === filter)
    }, [items, filter]);

    

  return (
    <div>
        {filteredTrends.map((trend) => (
            <TrendCard key={trend.id} trend={trend} onSave={handleSave} />
        ))}
    </div>
  )
}

export default TrendList