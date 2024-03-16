import React, { useCallback, useEffect, useState,useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [Password, setPassword] = useState("");
  const passRef=useRef(null)
  const passGenerate = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (num === true) {
      str += "1234567890";
    }
    if (char === true) {
      str += "!@#$%^&*()";
    }
    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);
  useEffect(() => {
    passGenerate();
  }, [passGenerate, length, num, char]);
const copyPassword=useCallback(()=>{
  passRef.current?.select()
  passRef.current?.setSelectionRange(0,10)
  window.navigator.clipboard.writeText(Password)
},[Password])
  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passRef}
            
          />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="item-center flex gapx-1">
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => setNum((prev) => !prev)}
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="item-center flex gapx-1">
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() => setChar((prev) => !prev)}
              id="chracter"
            />
            <label htmlFor="chracter">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
