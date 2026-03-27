import { Link } from "react-router-dom";
import { tools } from "../data/tools";

function Tools() {
  return (
    <div>
      <h2>AI Tools</h2>

      {tools.map(tool => (
        <div key={tool.id}>
          <Link to={`/tools/${tool.id}`}>
            {tool.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Tools;