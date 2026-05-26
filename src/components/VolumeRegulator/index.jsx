import React, { useState } from "react";
//INTERVIEW QUESTION, ASKED IN CODESCURE TECH

const VolumeAdapter = () => {
  const [data, setData] = useState({
    music: Number(0),
    voice: Number(0),
  });
  const { music, voice } = data;

  console.log(typeof music);
  const volume = Number(music) + Number(voice);

  const handleChange = (e) => {
    setData((prev) => {
      const { voice, music } = prev;
      if (Number(voice) + Number(music) < 100)
        return { ...prev, [e.target.name]: e.target.value };
      else return prev;
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="music">Music</label>
        <input
          value={data.music}
          id="music"
          name="music"
          type="range"
          min={0}
          max={100}
          onChange={handleChange}
        />{" "}
        {data.music}
      </div>

      <div>
        <label htmlFor="voice">Voice</label>
        <input
          value={data.voice}
          id="voice"
          name="voice"
          type="range"
          min={0}
          max={100}
          onChange={handleChange}
        />
        {data.voice}
      </div>

      <div>
        <label htmlFor="volume">Volume</label>
        <input
          id="volume"
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={() => {}}
        />
        {volume}
      </div>
    </div>
  );
};

export default VolumeAdapter;
