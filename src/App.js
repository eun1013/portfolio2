import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import OverviewDream from "./Components/Overview/OverviewDream";
import OverviewSodam from "./Components/Overview/OverviewSodam";
import MainLayout from "./Components/MainLayout";
import OverviewLittle from "./Components/Overview/OverviewLittle";
import OverviewGG from "./Components/Overview/OverviewGG";


const App = () => {
  return (
    <BrowserRouter scrollRestoration="manual">
      <Routes>
        <Route path="/*" element={<MainLayout/>}/>
        <Route path="/overviewLittle" element={<OverviewLittle/>}/>
        <Route path="/overviewGG" element={<OverviewGG/>}/>
        <Route path="/overviewDream" element={<OverviewDream/>}/>
        <Route path="/overviewSodam" element={<OverviewSodam/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;