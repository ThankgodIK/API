import axios from "axios";

import "./App.css";

function App() {
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  getUsers();
  return (
    <div>
      <h1 className="text-3xl text-center">Hello world</h1>
    </div>
  );
}

export default App;
