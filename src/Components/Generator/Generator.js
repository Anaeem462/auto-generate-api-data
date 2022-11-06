import React from "react";
import { useState } from "react";

const Generator = () => {
  const [inputType, setInputType] = useState([]);

  const [id, setId] = useState(1);

  const handleSelect = (e) => {
    e.preventDefault();
    const type = e.target[0].value;
    setId(id + 1);
    const typeofObject = {
      type,
      id,
    };
    setInputType([...inputType, typeofObject]);
  };

  return (
    <div className=" p-2 grid ">
      <div></div>
      <div className="grid justify-center">
        <form action="" onSubmit={handleSelect}>
          <label htmlFor="name" className="text-blue-500 text-xl font-bold">
            Input type :{" "}
          </label>
          <select className="px-4 py-2 my-4 text-xl rounded-md mr-5">
            <option value="text">text</option>
            <option value="password">password</option>
            <option value="url">Url</option>
            <option value="message">Message</option>
            <option value="date">Date</option>
            <option value="number">Number</option>
            <option value="tel">telephone</option>
            <option value="email">Email</option>
          </select>
          <button className="px-4 py-2  font-extrabold rounded text-white  hover:bg-black transition-colors bg-yellow-400">
            Add
          </button>
        </form>
        <form
          action=""
          className="bg-blue-500 grid mt-12 mr-10 px-12 rounded-xl"
        >
          {inputType.map((arr) => (
            <div key={arr.id}>
              <label
                htmlFor="name"
                className="text-white text-xl font-bold float-left mt-7"
              >
                {arr.type} :{" "}
              </label>

              <input
                type={arr.type}
                name={arr.type}
                placeholder={arr.type}
                className="p-2 border border-blue-400  rounded-xl pl-3 m-5 float-right"
              />
            </div>
          ))}
          <button className="px-4 py-2 my-5 font-extrabold rounded-xl text-white  hover:bg-black transition-colors bg-yellow-400">
            Create Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Generator;

//  const [inputArrBtn, setInputArrBtn] = useState(1);
//  if (inputArrBtn === 0 || inputArrBtn < 1) {
//    setInputArrBtn(1);
//  }

//  let arrayInput = [...Array(inputArrBtn).keys()];

//  <div className="">
//    <button
//      onClick={() => setInputArrBtn(inputArrBtn + 1)}
//      className="px-4 py-2 mr-3 text-3xl font-extrabold rounded text-white transition  hover:bg-blue-500  transition-colors bg-yellow-400"
//    >
//      {" "}
//      +{" "}
//    </button>
//    <button
//      onClick={() => setInputArrBtn(inputArrBtn - 1)}
//      className={`px-5 ml-4 py-2 text-3xl font-extrabold rounded ${
//        inputArrBtn === 1
//          ? `bg-slate-300 text-black`
//          : " text-white transition  hover:bg-blue-500   bg-yellow-400"
//      }`}
//    >
//      {" "}
//      -{" "}
//    </button>
//  </div>;

// <form action="" className="bg-blue-500 w-[500px] mx-auto px-12 rounded-xl">
//   {arrayInput.map((arr) => (
//     <div key={arr}>
//       <label htmlFor="name" className="text-white text-xl font-bold">
//         "Name":{" "}
//       </label>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         className="p-2 border border-blue-400  rounded-xl pl-3 m-5"
//       />
//     </div>
//   ))}
// </form>;
