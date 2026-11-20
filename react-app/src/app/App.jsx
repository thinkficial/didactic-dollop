import { Navigate, Route, Routes } from "react-router";

import SiteLayout from "../components/layout/SiteLayout.jsx";

import HomePage from "../pages/Home/HomePage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import ServicesPage from "../pages/Services/ServicesPage.jsx";
import AcademyPage from "../pages/Academy/AcademyPage.jsx";
import ManagementPage from "../pages/Management/ManagementPage.jsx";
import ContactPage from "../pages/Contact/ContactPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="services" element={<ServicesPage />} />

        <Route path="academy" element={<AcademyPage />} />

        <Route path="management" element={<ManagementPage />} />

        <Route path="contact" element={<ContactPage />} />

        {/* Preserve redirects from the old HTML URLs */}
        <Route path="index.html" element={<Navigate to="/" replace />} />

        <Route path="about.html" element={<Navigate to="/about" replace />} />

        <Route
          path="services.html"
          element={<Navigate to="/services" replace />}
        />

        <Route
          path="academy.html"
          element={<Navigate to="/academy" replace />}
        />

        <Route
          path="management.html"
          element={<Navigate to="/management" replace />}
        />

        <Route
          path="contact.html"
          element={<Navigate to="/contact" replace />}
        />

        <Route
          path="*"
          element={
            <section>
              <h1>404 — Page Not Found</h1>
              <p>The requested page does not exist.</p>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
