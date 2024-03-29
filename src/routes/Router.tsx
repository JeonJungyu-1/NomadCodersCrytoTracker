import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}`} element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
