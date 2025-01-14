import useAuthorized from "../features/Authentication/useAuthorized";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorized();
  console.log(isAuthorized);

  // 1.load the authenthicated user
  // 2.check if is authorized or not,check if is authenthicated or not
  // 3.while loading => show a loading
  // 4.if user is authenthicated and is authorized =>render the app
  return children;
}

export default ProtectedRoute;
