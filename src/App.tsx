import { Navigate, Route, Routes } from "react-router";

import SignUp from "./pages/sign-up";
import Step1 from "./pages/sign-up/step-1";
import Step2 from "./pages/sign-up/step-2";

import { ROUTES } from "./modules/routing/enums";

export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.SIGN_UP.ROOT} replace />} />

      <Route path={ROUTES.SIGN_UP.ROOT} element={<SignUp />}>
        <Route
          index
          element={<Navigate to={ROUTES.SIGN_UP.STEP_1} replace />}
        />
        <Route path={ROUTES.SIGN_UP.STEP_1} element={<Step1 />} />
        <Route path={ROUTES.SIGN_UP.STEP_2} element={<Step2 />} />
      </Route>
    </Routes>
  );
}
