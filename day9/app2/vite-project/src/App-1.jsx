import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const city = e.target.city.value;
    setUsers((prev) => [...prev, { username, city }]);
    e.target.reset(); // optional: to clear the form after submission
  };

  const handleDelete = (idx) => {
    // setUsers((prev) => prev.filter((_, i) => i !== idx));
    setUsers((prev)=>{
      const temp=[...prev];
      temp.splice(idx,1);
      return temp;
    });
    
  };

  return (
    <div>
      <form onSubmit={handleCreateUser}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="city" placeholder="City" required />
        <button type="submit">Add</button>
      </form>
      <div>
        {users.map((elem, idx) => (
          <div key={idx}>
            <h4>{elem.username}</h4>
            <p>{elem.city}</p>
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
