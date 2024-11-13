import { useState } from "react"


const General = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />



          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default General
