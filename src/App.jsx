import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

//my component
function App() {
  const [users, setUsers] = useState(null);
  const [showUsers, setShowUsers] = useState(false); // State to manage showing/hiding users

  //function to fetch data with API
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //function that keeps tract of showUsers state and toggles it on and off
  const handleToggleUsers = () => {
    if (showUsers) {
      setUsers(null); // Clear users when hiding
    } else {
      getUsers(); // Fetch users when showing
    }
    setShowUsers(!showUsers); // Toggle showUsers state
  };

  //this becomes unneccessary since the showUsers() is called in the toggle function
  useEffect(() => {
    // getUsers();
  }, []);

  //sending elements to the DOM
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center bg-green-500 text-white py-4 rounded-lg">
        Welcome to Users World
      </h1>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggleUsers}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {/* if showUsers is true, display Hide Users, if not, display Get Users */}
          {showUsers ? "Hide Users" : "Get Users"}
        </button>
      </div>

      {showUsers && users && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {users.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
            >
              <div className="bg-green-500 text-white p-4">
                <strong className="block mb-1">Name:</strong>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <strong className="block mb-1">Email:</strong>
                  <p>{item.email}</p>
                </div>
                <div>
                  <strong className="block mb-1">Phone:</strong>
                  <p>{item.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* if show users is not true display this text */}
      {!showUsers && (
        <p className="text-center mt-4">Click "Get Users" to load users.</p>
      )}
    </div>
  );
}

export default App;
