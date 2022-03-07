import React from "react";
import Card from "./Card";

const Dashboard = ({ albums }) => {
  return (
    <>
      {albums.map((album, index) => (
        <Card key={index} title={album.title} albumid={album.id} userid={album.userId} />
      ))}
    </>
  );
};

export default Dashboard;
