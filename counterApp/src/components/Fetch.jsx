import { useEffect, useState } from "react";

const Fetch = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  },[]);
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}>
                <h4>{user.login}</h4>
              </a>
              <div className="mt-5 flex justify-center">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="h-20 w-20 border rounded-lg ml-5"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fetch;
