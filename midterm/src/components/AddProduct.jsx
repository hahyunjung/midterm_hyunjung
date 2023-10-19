import React, { useState } from "react";


function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    Category: "",
    Quantity:"",
    Price:"",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event,data) => {

    event.preventDefault();
    alert(
      `Name: ${formData.name}, Discription: ${formData.discription},Category: ${formData.Category},Quantity: ${formData.Quantity},Price: ${formData.Price}`
    );

    console.log(formData)
    
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      
      <input
        type="text"
        id="name"
        className="multiple__input"
        placeholder="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        id="discription"
        className="multiple__input"
        placeholder="discription"
        name="discription"
        value={formData.discription}
        onChange={handleChange}
      />

    <input
        type="text"
        id="Category"
        className="multiple__input"
        placeholder="Category"
        name="Category"
        value={formData.Category}
        onChange={handleChange}
      />

      <input
        type="text"
        id="Quantity"
        className="multiple__input"
        placeholder="Quantity"
        name="Quantity"
        value={formData.Quantity}
        onChange={handleChange}
      />

     <input
        type="number"
        id="Price"
        className="multiple__input"
        placeholder="Price"
        name="Price"
        value={formData.Price}
        onChange={handleChange}
      />


      


      <button className="multiple__button" type="submit">
        SUBMIT
      </button>

      <button >
        CANCEL
      </button>
    </form>
  );
}

export default Multiple;