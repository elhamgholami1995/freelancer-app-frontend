import useUser from "../features/Authentication/useUser";

function Header() {
  const { data } = useUser();
  console.log(data);
  return <div className="bg-secondary-0 py-4 px-8">app header</div>;
}

export default Header;
