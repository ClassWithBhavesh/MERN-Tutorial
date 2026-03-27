import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/">Dashboard</Link>
      <Link to="/tools">AI Tools</Link>
      <Link to="/saved">Saved</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    background: "#eee"
  }
};

export default Navbar;