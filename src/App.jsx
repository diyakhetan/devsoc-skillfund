import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage"; // Import the new page
import Navigation from "./components/layout/Navigation"; 
import { Box } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/create" element={<CreateProjectPage />} />
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} /> {/* Dynamic route */}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
