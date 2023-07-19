import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <div className="align-middle flex flex-grow flex-col items-center justify-center">
      <h2>We are working hard to make this page purrdy</h2>
      <h2>Cya l8r :)</h2>
    </div>
  );
};

export default ProjectsPage;
