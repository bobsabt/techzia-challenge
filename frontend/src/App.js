import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import useData from "./Utils/useData";

function App() {
  const [user, setUser] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const { albums = [], users = [] } = useData();

  return (
    <BrowserRouter>
      <div className="App container is-fullhd">
        <Navbar isLogged={isLoggedIn} user={user} />
        <main>
          <Routes>
            <Route path="/techzia-challenge" element={<Dashboard albums={albums} />} />
            <Route
              path="/login"
              element={
                <Login
                  users={users}
                  setIsLoggedIn={setIsLoggedIn}
                  setUser={setUser}
                />
              }
            />
            <Route path="/profil" element={<Profile user={user} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
