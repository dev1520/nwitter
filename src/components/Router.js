
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth"
import Home from "routes/Home"
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn}) => {
    console.log(isLoggedIn);
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/profile" element={ <Profile /> } />
                    </>
                ) : (
                    <Route path="/" element={ <Auth /> } />
                )}   
                {/*
                <Route path="*" element={<Navigate replace to="/" />} />
                */}
            </Routes>
        </Router>
    );
};

export default AppRouter;