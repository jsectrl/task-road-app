import { useState } from "react";
import axios from "axios";

export default function RegisterProjectForm() {
  const [projectName, setName] = useState("");
  const [projectObjective, setObjective] = useState("");

  const registerProject = async (event: any) => {
    event.preventDefault();
    try {
      const data = {
        name: projectName,
        objective: projectObjective,
      };
      const response = await axios.post("/projects/register", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-blue-300 p-4">
        <h2 className="text-center">Register New Project </h2>
        <form onSubmit={registerProject}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="rounded-full px-2"
              value={projectName}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter project name..."
            />
            <br />
            <label htmlFor="projectObjective">Project Objective:</label>
            <input
              type="text"
              id="projectObjective"
              name="projectObjective"
              className="rounded-full px-2"
              value={projectObjective}
              onChange={(event) => setObjective(event.target.value)}
              placeholder="Enter project objective"
            />
            <br />
            <input
              className="px-2 mx-8 rounded-full border-2"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
