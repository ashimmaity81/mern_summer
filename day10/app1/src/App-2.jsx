import { useState } from "react";

const FRUITS = [
  {
    name: "Kiwi",
    color: "green",
    price: 600,
  },
  {
    name: "Banana",
    color: "yellow",
    price: 40,
  },
  {
    name: "Apple",
    color: "red",
    price: 200,
  },
  {
    name: "Mango",
    color: "yellow",
    price: 150,
  },
];

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [fruits, setFruits] = useState(FRUITS);
  const [editedFruit, setEditedFruit] = useState({ name: "", color: "", price: "" });

  const handleEditClick = (idx) => {
    setEditIndex(idx);
    setEditedFruit(fruits[idx]);
  };

  const handleSave = () => {
    const updated = [...fruits];
    updated[editIndex] = editedFruit;
    setFruits(updated);
    setEditIndex(-1);
  };

  const handleChange = (e) => {
    setEditedFruit({
      ...editedFruit,
      [e.target.name]: e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  return (
    <div>
      {fruits.map((elem, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          {editIndex === idx ? (
            <div>
              <input
                type="text"
                name="name"
                value={editedFruit.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="color"
                value={editedFruit.color}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                value={editedFruit.price}
                onChange={handleChange}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <h4>Name: {elem.name}</h4>
              <h4>Color: {elem.color}</h4>
              <h4>Price: {elem.price}</h4>
              <button onClick={() => handleEditClick(idx)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
