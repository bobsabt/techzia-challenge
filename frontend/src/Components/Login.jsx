import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ users, setIsLogged, setUser }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(true);

  let navigate = useNavigate();

  const onClickLogin = (inputuser, inputpassword) => {
    let existUser = false;
    let oneUser = [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].username.toUpperCase() === inputuser.toUpperCase()) {
        existUser = true;
        oneUser = [
          { name: "Id", value: users[i].id },
          { name: "Username", value: users[i].username },
          { name: "Name", value: users[i].name },
          { name: "Phone", value: users[i].phone },
          { name: "Email", value: users[i].email },
          { name: "Website", value: users[i].website },
          { name: "City", value: users[i].address.city },
          { name: "Street", value: users[i].address.street },
          { name: "Suite", value: users[i].address.suite },
          { name: "Zipcode", value: users[i].address.zipcode },
          { name: "Geo - lat", value: users[i].address.geo.lat },
          { name: "Geo - long", value: users[i].address.geo.lng },
          { name: "Company name", value: users[i].company.name },
          { name: "CatchPhrase", value: users[i].company.catchPhrase },
          { name: "Bs", value: users[i].company.bs },
        ];
      }
    }

    if (existUser && inputpassword === "123456") {
      setTimeout(() => {
        navigate("/");
        setIsLogged(true);
        setUser(oneUser);
      }, 500);
    } else {
      setIsSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClickLogin(userName, password);
  };

  return (
    <div>
      <form className="box" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">User name</label>
          <div className="control">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="User"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setIsSuccess(true);
                }}
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-user"></i>
              </span>
            </p>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsSuccess(true);
                }}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>
        {!isSuccess && <p>Wrong username/passwrod</p>}
        <button className="button is-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
