import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <UserList />
      <button
        onClick={() => setResource("posts")}
        className="ui primary button"
      >
        Posts
      </button>
      <button onClick={() => setResource("todos")} className="ui red button">
        Todos
      </button>

      <br />

      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
