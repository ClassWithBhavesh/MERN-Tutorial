import React, { memo } from 'react'

const TrendCard = memo(({trend, onSave}) => {
  return (
    <div style={styles.card}>
        <h3>{trend.title}</h3>
        <p>Category : {trend.category}</p>
        <p>Score : {trend.score}</p>
        <button onClick={() => onSave(trend.id)}>Save Signal</button>
    </div>
  )
});

const styles = {
    card: {
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px"
    }
}

export default TrendCard