import React, { useState } from 'react';

interface FormData {
  field1: string;
  field2: string;
  field3: string;
  field4: number;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    field1: '',
    field2: '',
    field3: '',
    field4: 0,
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pizzeria Name:</label>
        <select name="field1" value={formData.field1} onChange={handleChange}>
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
        <select name="field2" value={formData.field2} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="A">Cheese</option>
          <option value="B">Mushroom</option>
          <option value="C">Pepperoni</option>
        </select>
      </div>

      <div>
        <label>Payment Currency:</label>
        <select name="Payment Currency" value={formData.field3} onChange={handleChange}>
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
          name="field4"
          value={formData.field4}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export { MyForm};
