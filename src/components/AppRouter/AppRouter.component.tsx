import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

//pages
import LandingPage from "../../pages/LandingPage/LandingPage";
import Login from "../../pages/Login/Login";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<LandingPage />} />
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  );
}
