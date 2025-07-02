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

    const handleSubmit = (e, idx) => {
        e.preventDefault();
        setFruits((prev) => {
            const temp = [...prev];
            temp[idx].name = e.target.fruitName.value;
            temp[idx].color = e.target.fruitColor.value;
            temp[idx].price = e.target.fruitPrice.value;
            return temp;
        });
        setEditIndex(-1);
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
            {fruits.map((elem, idx) => {
                return (
                    <div style={{backgroundColor : editIndex===idx ? "red" : "green"}}>
                        {editIndex !== idx ? (
                            <div>
                                <h4>{elem.name}</h4>
                                <h4>{elem.color}</h4>
                                <h4>{elem.price}</h4>
                                <button
                                    onClick={() => {
                                        setEditIndex(idx);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        ) : (
                            <div>
                                <form
                                    onSubmit={(e) => {
                                        handleSubmit(e, idx);
                                    }}
                                    onReset={() => setEditIndex(-1)}
                                >
                                    <input type="text" name="fruitName" />
                                    <input type="text" name="fruitColor" />
                                    <input type="text" name="fruitPrice" />
                                    <button>Update</button>
                                    <button type="reset">Cancel</button>
                                    <button onClick={() => handleDelete(idx)}>Delete</button>
                                </form>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default App;
