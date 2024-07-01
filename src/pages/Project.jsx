import Loading from "../ui/Loading";
import useProject from "../features/Project/useProject";
import ProjectHeader from "../features/Project/ProjectHeader";
import ProposalsTable from "../features/Project/ProposalsTable";

function Project() {
  const { isLoading, project } = useProject();
  if (isLoading) return <Loading />;
  console.log(project);
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
