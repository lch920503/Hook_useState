import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const [nameId, setNameId] = useState(1);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const handleAddName = () => {
    setNameId(nameId + 1);
    const obj = {
      id: nameId,
      name,
    };
    setNameList((prev) => prev.concat(obj));
    setName("");
  };
  console.log("nameList", nameList);

  return (
    <>
      <h1>React Hook - useState</h1>
      <div>
        <label htmlFor="name">이름: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChangeName}
          placeholder="이름을 입력해주세요"
        />
        <button onClick={handleAddName}>등록</button>
      </div>
      <div>
        <ul>
          {nameList.map((name) => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
