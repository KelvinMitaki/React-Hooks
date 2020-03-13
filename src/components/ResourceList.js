import React from "react";
import useResource from "./useResource";

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);
  const res = resources.map(resource => {
    return (
      <div key={resource.id}>
        <li>{resource.title}</li>
      </div>
    );
  });
  return (
    <div>
      {resource}
      <br />
      <ul>{res}</ul>
    </div>
  );
};

export default ResourceList;
