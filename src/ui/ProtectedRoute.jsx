import { useEffect } from "react";
import useAuthorized from "../features/Authentication/useAuthorized";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1.load the authenthicated user
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorized();

  // 2.check if is authorized or not,check if is authenthicated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  // 3.while loading => show a loading
  if (isLoading)
    return (
      <div className=" flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4.if user is authenthicated and is authorized =>render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
