import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="container xl:max-w-screen-xl">
      <Routes>
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
export default App;
