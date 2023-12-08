import React, { useState } from "react";

const NewMovieForm = ({}) => {
  const [title, settitle] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <form className="flex-item">
      <h4>Add Movie</h4>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => settitle(e.target.value)} />
      </div>
      <div>
        <label>Running Time</label>
        <input
          value={runningTime}
          onChange={(e) => setRunningTime(e.target.value)}
        />
      </div>
      <div>
        <label>Title</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
    </form>
  );
};

export default NewMovieForm;
