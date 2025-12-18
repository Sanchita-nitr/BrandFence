import { Navigate, Route, Routes } from "react-router-dom";
import ThreatsDeletedPage from "./pages/threats/ThreatsDeletedPage";
import ThreatsPage from "./pages/threats/ThreatsPage";
import ThreatsWatchlistPage from "./pages/threats/ThreatsWatchlistPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/threats/all" />} />
      <Route path="/threats/:mode" element={<ThreatsPage />} />
      <Route path="/watchlist" element={<ThreatsWatchlistPage />} />
      <Route path="/deleted" element={<ThreatsDeletedPage />} />
    </Routes>
  );
}
