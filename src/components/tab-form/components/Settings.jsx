const Settings = ({ data, setData, errors }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((previousData) => ({
      ...previousData,
      theme: e.target.name,
    }));
  };

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChange}
          />
          light
        </label>
      </div>

      {errors?.settings && <span>{errors?.settings}</span>}
    </>
  );
};

export default Settings;
