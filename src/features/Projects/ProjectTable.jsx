import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
 

  return <div>ProjectTable</div>;
}

export default ProjectTable;
