import { popup } from "../../utils/interfaces";

export default function NavigationSearchBar(props: popup) {
  return (
    <>
      <h1>Search Bar</h1>
      <input type="text" placeholder="Search for Project" />
      <button onClick={props.pop} className="bg-red-500">
        New Project
      </button>
    </>
  );
}
