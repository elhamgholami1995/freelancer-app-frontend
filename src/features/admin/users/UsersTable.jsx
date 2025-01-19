import useUsers from "../useUsers";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import UserRow from "./UserRow";

function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) return <Loading />;
  if (!users.length) return <Empty resourceName="کاربری" />;
  return (
    <Table>
      <Table.header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;