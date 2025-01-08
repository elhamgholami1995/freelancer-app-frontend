import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    classname: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    classname: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].classname}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          title={`درخواست انجام پروژه ${title}`}
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateProposal
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;