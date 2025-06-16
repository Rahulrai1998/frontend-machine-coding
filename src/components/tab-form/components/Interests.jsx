const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleChange = (e) => {
    if (e.target.checked) console.log(e.target.name);
    setData((previousData) => ({
      ...previousData,
      interests: e.target.checked
        ? [...previousData.interests, e.target.name]
        : previousData.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={interests?.includes("sports")}
            onChange={handleChange}
          />
          Sports
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests?.includes("music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="gaming"
            checked={interests?.includes("gaming")}
            onChange={handleChange}
          />
          Gaming
        </label>
      </div>

      {errors?.interests && <span>{errors?.interests}</span>}
    </>
  );
};

export default Interests;
