import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

function ProposalsTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resourceName="پروپوزال" />;
  return (
    <Table>
      <Table.header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposals._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
