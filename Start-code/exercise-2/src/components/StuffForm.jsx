import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name.trim() || !price.trim()) return; 

    console.log(`A new object named ${name}, price $${price} will be added to the list`);
    
    onAddStuff({ name, price: parseFloat(price) });

    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input 
        type="text" 
        placeholder="Banana" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input 
        type="number" 
        placeholder="15" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}