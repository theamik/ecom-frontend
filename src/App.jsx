import { Routes, Route, useLocation } from "react-router-dom";
import AppLayout from "./components/Layouts/AppLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import { Suspense, useEffect } from "react";
import SuspenseFallback from "./components/SuspenseFallback/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./redux/actions/UserAction";

const App = () => {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth && localStorage.getItem("token")) {
      dispatch(getAuthUser());
    }
  }, [dispatch,isAuth]);

  if (pathname.startsWith("/admin")) return <AdminLayout />;
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/*" element={<AppLayout />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
