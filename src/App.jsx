import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useTheme } from './store/theme';
import { useAuthStore } from './store/auth';
import { Toaster } from './components/ui/toaster';
import {FounderForm} from './components/FounderForm';
import { useEffect } from 'react';
import  OurTeam  from './pages/Ourteam';
import AboutUs from './pages/About';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';


function App() {
  const { theme } = useTheme();
  const initializeAuthListener = useAuthStore(state => state.initializeAuthListener);

  useEffect(() => {
    const unsubscribe = initializeAuthListener();
    return () => unsubscribe();
  }, [initializeAuthListener]);

  return (
    <div className={theme}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Router>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/founder-form" element={<FounderForm />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </Router>
        <Toaster />
      </div>
    </div>
  );
}

export default App;