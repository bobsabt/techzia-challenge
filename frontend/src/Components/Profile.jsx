import React from "react";
import TbodyBP from "./TbodyBP";

const Profil = ({ user }) => {

  return (
    <div>
      <table class="table">
        <tbody>
          {user.map((item, index) => <TbodyBP key={index}
            name={item.name}
            value={item.value}
            />
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Profil;