import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Layout from './components/Layout/Layout';
import './App.css';

const App = () => {
    return (
        <>
          <Layout />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute>
                            <RegistrationPage />
                        </RestrictedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute>
                            <LoginPage />
                        </RestrictedRoute>
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute>
                            <ContactPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
