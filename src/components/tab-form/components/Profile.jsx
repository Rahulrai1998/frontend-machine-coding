const Profile = ({ data, setData, errors }) => {
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
        {errors?.name && <span>{errors?.name}</span>}
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
        {errors?.age && <span>{errors?.age}</span>}
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
        {errors?.email && <span>{errors?.email}</span>}
      </div>
    </>
  );
};

export default Profile;
