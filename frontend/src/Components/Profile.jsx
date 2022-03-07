import React from "react";
import TbodyContent from "./TbodyContent";

const Profil = ({ user }) => {
  return (
    <div>
      <table class="table">
        <tbody>
          {user.map((item, index) => (
            <TbodyContent key={index} name={item.name} value={item.value} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profil;
