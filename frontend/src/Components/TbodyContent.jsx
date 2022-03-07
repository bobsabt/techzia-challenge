import React from "react";

const TbodyContent = ({ name, value }) => {
  return (
    <>
      <tr>
        <th>{name}</th>
        <td>{value}</td>
      </tr>
    </>
  );
};

export default TbodyContent;
