const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleChange = (event, item) => {
    setData((previousData) => ({
      ...previousData,
      [item]: event.target.value,
    }));
  };
  return (
    <>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
    </>
  );
};

export default Profile;
