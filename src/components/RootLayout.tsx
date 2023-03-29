import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div id='outer-container'>
      <Header />
      <Outlet />
    </div>
  );
}
