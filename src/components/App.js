
import React from "react";
import axios from "axios";
import './../styles/App.css';
import React, { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUser = async () => {
    console.log("fetching .....");
    try {
      const res = await fetch("https://reqres.in/api/users", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const json = await res.json();
      setData(json.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(data);

  return (
    <div>
      <div>
        <h3>Blue Whales</h3>
        <button className="btn" onClick={fetchUser}>
          {" "}
          Get User List
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <p>No data found to display.</p>}
          {data &&
            data.map((info) => {
              return (
                <tr>
                  <td>{info.first_name}</td>
                  <td>{info.last_name}</td>
                  <td>{info.email}</td>
                  <td>
                    <img src={info.avatar} alt="user" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
