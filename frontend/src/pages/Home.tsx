import { useState } from "react";
import { Outlet } from "react-router-dom";

import Main from "../styles/Main";
import Navigation from "../features/Navigation/Navigation";
import Dashboard from "../features/Dashboard/Dashboard";
import RegisterProjectForm from "../components/forms/RegisterProjectForm";

export default function Home() {
  const [registerPopup, setFormVisibility] = useState(false);
  const changeVisibility = () => {
    setFormVisibility(!registerPopup);
  };
  return (
    <>
      <Main>
        <div className="w-full h-full flex flex-col md:flex-row">
          <Navigation pop={changeVisibility} />
          <Dashboard>
            <Outlet />
          </Dashboard>
        </div>
        {registerPopup && <RegisterProjectForm pop={changeVisibility} />}
      </Main>
    </>
  );
}
