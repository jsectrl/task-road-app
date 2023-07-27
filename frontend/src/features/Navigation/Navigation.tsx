import { popup } from "../../utils/interfaces";
import NavigationSearchBar from "./NavigationSearchBar";
import NavigationProjects from "./NavigationProjects";

export default function Navigation(props: popup) {
  return (
    <>
      <div className="w-4/12 h-full bg-yellow-500">
        <NavigationSearchBar pop={props.pop} />
        <NavigationProjects />
      </div>
    </>
  );
}
