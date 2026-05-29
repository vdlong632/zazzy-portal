import { Navigate, Route, Routes } from 'react-router-dom';
import { NavbarLayout } from './components/organisms/NavbarLayout';
import { HomePage } from './pages/ClientPage/HomePage';
import { VendorLoginPage } from './pages/ClientPage/VendorLoginPage';
import { ImpactPage } from './pages/ClientPage/ImpactPage';
import { VendorPage } from './pages/ClientPage/VendorPage';
import { Step1 } from './pages/ClientPage/QuizPage/components/Step1';
import { DashboardPage } from './pages/ClientPage/DashboardPage';
import { QuizPage } from './pages/ClientPage/QuizPage';
import { ResultPage } from './pages/ClientPage/ResultPage';

export default function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route
        path="/*"
        element={
          <NavbarLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/marketplace" element={<VendorPage />} />
              <Route path="/vendor-login" element={<VendorLoginPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/step1" element={<Step1 />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </NavbarLayout>
        }
      />

      {/* Public Routes */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/403" element={<Page403 />} />
      <Route path="/404" element={<Page404 />} /> */}

      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
