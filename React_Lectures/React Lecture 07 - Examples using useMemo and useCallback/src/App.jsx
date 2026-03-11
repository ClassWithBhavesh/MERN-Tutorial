import "./App.css";
import React, { useState, useMemo, useCallback } from "react";
import PromptCard from "./components/PromptCard";
import { prompts } from "./Dataset/prompts";

export default function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [bookmarks, setBookmarks] = useState([]);

  // 🔥 useCallback to prevent re-render of child components
  const handleBookmark = useCallback((id) => {
    setBookmarks((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }, []);


  // 🔥 useMemo for expensive filtering + sorting
  const filteredPrompts = useMemo(() => {

    console.log("Filtering prompts...");

    let result = prompts;

    // Search filtering
    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filtering
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Heavy sorting simulation
    result = result.sort((a, b) => b.likes - a.likes);

    return result;

  }, [search, category]);


  return (
    <div style={styles.container}>

      <h1>AI Prompt Workspace</h1>

      <p>Bookmarks: {bookmarks.length}</p>

      <div style={styles.controls}>

        <input
          placeholder="Search prompts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Programming</option>
          <option>Marketing</option>
          <option>Business</option>
        </select>

      </div>


      <div style={styles.parCard}>

        {filteredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onBookmark={handleBookmark}
          />
        ))}

      </div>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "40px auto",
    fontFamily: "sans-serif"
  },
  controls: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  parCard: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px"
  }
};