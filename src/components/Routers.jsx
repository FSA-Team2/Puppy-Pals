import { Routes, Route } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";
import FetchAllPlayers from "../API";

export default function RoutePaths() {
  return (
    <div id="paths">
      <Routes>
        <Route path="/" element={<FetchAllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}
