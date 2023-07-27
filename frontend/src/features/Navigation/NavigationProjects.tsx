import { useState } from "react";
import axios from "axios";

interface ProjectProps {
  name: string;
}

function NavigationItem(item: ProjectProps) {
  return (
    <>
      <div className="p-4  border-2">
        <a href="">{item.name}</a>
      </div>
    </>
  );
}

export default function NavigationProjects() {
  const [activeProjects, setActiveProjects] = useState<any[]>([]);

  const retrieveProjects = async (event: any) => {
    try {
      const response = await axios.get("/projects");
      setActiveProjects(response.data);
      console.log(activeProjects);
      console.log("/projects GET completed");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {activeProjects.map((project) => (
          <NavigationItem name={project.name} />
        ))}
      </div>
    </>
  );
}
