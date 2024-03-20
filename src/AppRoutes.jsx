// AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/dashboard/Overview";
import Analytics from "./components/dashboard/Analytics";
import Trends from "./components/dashboard/Trends";

import Data from "./components/dashboard/Data";
import Home from "./components/Home";
import TotalTeam from "./components/Team/TotalTeam";
import Post from "./components/Posts/Post";
import Comments from "./components/Posts/Comments";
import Photos from "./components/Posts/Photos";
import PhotoDetails from "./components/Posts/PhotoDetails";

// Import other components for additional routes (e.g., Settings, Services, etc.)

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/home" element={<Overview />} />
      <Route path="/dashboard/services" element={<Data />} />
      <Route path="/dashboard/settings" element={<Analytics />} />
      <Route path="/dashboard/trends" element={<Trends />} />
      <Route path="/Team/totalteam" element={<TotalTeam />} />
      <Route path="/fetch/post" element={<Post />} />
      <Route path="/fetch/comment" element={<Comments />} />
      {/* <Route path="/fetch/photo" element={<Photos />} /> */}
      <Route path="/fetch/photo" element={<Photos />} />
      <Route path="/photo/:id" element={<PhotoDetails />} />
    </Routes>
  );
}

export default AppRoutes;
