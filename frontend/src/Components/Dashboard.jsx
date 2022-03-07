import React from "react";
import Card from "./Card";

const Dashboard = ({ albums }) => {
  return (
    <div>
      {albums.map((album, index) => (
        <Card key={index} title={album.title} albumid={album.id} userid={album.userId} />
      ))}
    </div>
  );
};

export default Dashboard;
