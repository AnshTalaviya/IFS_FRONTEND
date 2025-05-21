import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import FAQs from './components/pages/FAQs';
import InvestmentPlans from './components/pages/InvestmentPlans';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/pages/Calculator';
import AboutUs from './components/pages/AboutUs';
import HowItWorks from './components/pages/HowItWorks';
import Profile from './components/pages/profile';
import Dashboard from './components/pages/Dashboard';
import MyInvestments from './components/pages/MyInvestments';
import Reports from './components/pages/Reports';
import BankDetails from './components/pages/BankDetails';

const ProtectedRoute = ({ children }) => {
  // In a real app, you would check if the user is authenticated
  const isAuthenticated = true // For demo purposes

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  return (
    <div>
      {/* Routing logic */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/plans" element={<InvestmentPlans />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/calculator" element={<Calculator/>} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-investments"
          element={
            <ProtectedRoute>
              <MyInvestments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bank-details"
          element={
            <ProtectedRoute>
              <BankDetails />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
