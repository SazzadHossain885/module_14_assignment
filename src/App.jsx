import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";


const App = () => {
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<div className="text-5xl text-center text-red-500 mt-20">404 Not Found!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
