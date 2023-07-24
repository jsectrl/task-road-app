import RegisterProjectForm from "./forms/RegisterProjectForm";
import Projects from "./Projects";

function Menu() {
  return (
    <>
      <div className="w-4/12 h-full flex flex-col bg-green-500">
        <RegisterProjectForm />
        <Projects />
      </div>
    </>
  );
}

function Panel() {
  return (
    <>
      <div className="w-8/12 h-full bg-red-500"></div>
    </>
  );
}

export default function Board() {
  return (
    <>
      <div className="w-full h-full flex bg-yellow-500">
        <Menu />
        <Panel />
      </div>
    </>
  );
}
