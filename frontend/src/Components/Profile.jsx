import React from "react";
import TbodyContent from "./TbodyContent";

const Profil = ({ user }) => {
  return (
    <>
      <table className="table">
        <tbody>
          {user.map((item, index) => (
            <TbodyContent key={index} name={item.name} value={item.value} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Profil;
