import { memo } from "react";


const PromptCard = memo(({ prompt, onBookmark }) => {
  console.log("Rendering Prompt:", prompt.title);

  return (
    <div style={styles.card}>
      <h3>{prompt.title}</h3>

      <p>{prompt.text}</p>

      <p>
        Category: <strong>{prompt.category}</strong>
      </p>

      <p>❤️ {prompt.likes}</p>

      <button onClick={() => onBookmark(prompt.id)}>
        Bookmark
      </button>
    </div>
  );
});

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    background: "#fafafa",
    color: "#000000"
  }
};

export default PromptCard;