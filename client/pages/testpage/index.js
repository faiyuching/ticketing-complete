import axios from "axios";
import { useState, useEffect } from "react";
export default () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://www.zhuominginfo.org/api/users/currentuser")
      .then(function (res) {
        console.log(res.data);
        setData(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <h1>{data}</h1>;
};
