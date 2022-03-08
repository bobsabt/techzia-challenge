import React from "react";
import axios from "axios";

const useData = () => {
  const [albums, setAlbums] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  React.useEffect(() => {
    (async()=>{
      try{
        const response = await axios.get(`${BASE_URL}/albums`);
        setAlbums(await response.data)
      }catch(error){
        console.log(error)
      }
    })();
    (async()=>{
      try{
      const response = await axios.get(`${BASE_URL}/users`);
      setUsers(await response.data)
    }catch(error){
      console.log(error)
    }
    })();
    document.title = "TestTask";
  }, []);

  return { albums, users };
};

export default useData;
