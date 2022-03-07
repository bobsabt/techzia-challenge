import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [albums, setAlbums] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [isLogged, setIsLogged] = React.useState(false);

  const getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAlbums();
    getUsers();
    document.title = "ProbaTask";
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLogged={isLogged} user={user} />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard albums={albums} />} />
            <Route
              path="/login"
              element={
                <Login
                  users={users}
                  setIsLogged={setIsLogged}
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
