import React, { useState } from 'react';

interface FormData {
  place: string;
  type: string;
  currency: string;
  amount: number;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    place: '',
    type: '',
    currency: '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="myForm">
      <div>
        <label>Pizzeria Name:</label>
        <select name="place" value={formData.place} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="1">Bitza Bounty Pizzeria</option>
          <option value="2">Crypto Crust Corner</option>
          <option value="3">Satoshi Slices & More</option>
          <option value="4">Ether Eats Pizzeria</option>
          <option value="5">SmartContract Slices</option>
          <option value="6">Decentralized Dough Delights</option>
        </select>
      </div>

      <div>
        <label>Pizza Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="Cheese">Cheese</option>
          <option value="Mushroom">Mushroom</option>
          <option value="Pepperoni">Pepperoni</option>
        </select>
      </div>

      <div>
        <label>Payment Currency:</label>
        <select name="currency" value={formData.currency} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="ETH">ETH</option>
          <option value="BTC">BTC</option>
          <option value="USDC">USDC</option>
        </select>
      </div>

      <div>
        <label>Payment Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export { MyForm};

// <style jsx>{`
//   .myForm {
//     max-width: 400px;
//     margin: 0 auto;
//     padding: 20px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     color: yellow;
//   }

//   label {
//     display: block;
//     margin-bottom: 8px;
//   }

//   select,
//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 16px;
//     box-sizing: border-box;
//   }

//   button {
//     background-color: #0070f3;
//     color: #fff;
//     padding: 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//   }

//   button:hover {
//     background-color: #0056b3;
//   }
// `}</style>;