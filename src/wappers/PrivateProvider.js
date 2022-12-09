import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes";

export default function PrivateProvider() {
  return (
    <div>
      <div>Header</div>
      <div className="absolute top-[79px] right-0 bottom-0 left-0">
        <div>SideBar</div>
        <div className="flex-1 overflow-auto">
          <Routes>
            {publicRoutes.map((route) => {
              const Page = route.component;
              return <Route path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
}
