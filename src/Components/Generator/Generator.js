import React, { useEffect } from "react";
import { useState } from "react";
import DeleteData from "./DeleteData";

const Generator = () => {
    const [id, setId] = useState(1);
    const [inputType, setInputType] = useState([]);

    const [inputChange, setInputChange] = useState({});
    const [success, setSuccess] = useState(false);
    const [dbData, setDbData] = useState();
    const [apiURl, setApiURl] = useState("");

    localStorage.setItem("previous-Item", JSON.stringify(inputType));

    const handleSelect = (e) => {
        e.preventDefault();
        const type = e.target[0].value || e.target[1].value;
        setId(id + 1);
        const typeofObject = {
            type,
            id,
        };
        setInputType([...inputType, typeofObject]);
        e.target.reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const previousItems = JSON.parse(localStorage.getItem("previous-Item"));
        setInputType(previousItems);

        fetch(`${process.env.REACT_APP_SERVER_LINK}/userData`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(inputChange),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert("api added successfully");
                    e.target.reset();
                    setSuccess(!success);
                } else {
                    alert("api not successfully added");
                    console.log("post method", data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_LINK}/userData`)
            .then((res) => res.json())
            .then((data) => {
                setDbData(data.data);
                setApiURl(data.serverUrl);
            });
    }, [success]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const obj = { ...inputChange };
        obj[name] = value;
        setInputChange(obj);
    };

    return (
        <div className=' p-2 grid '>
            <div className='grid justify-center'>
                <form action='' onSubmit={handleSelect}>
                    <label htmlFor='name' className='text-[#F4A896] text-xl font-bold'>
                        Name Type :{" "}
                    </label>
                    <input type='text' name='text' placeholder='Enter a Name' className='p-2 border border-blue-400  rounded-xl pl-3 m-5 ' />
                    <select name='' id='' className='py-4 px-4 rounded-xl'>
                        <option value='email'>Email</option>
                        <option value='password'>Password</option>
                        <option value='text'>Text</option>
                        <option value='number'>Number</option>
                    </select>
                    <button className='btn bg-[#F4A896] btn-ghost text-white mx-4'>Add</button>
                </form>

                <form onSubmit={handleSubmit} action='' className='bg-[#F4A896]  grid mt-12 mr-10 px-12 rounded-xl'>
                    {inputType?.map((arr) => (
                        <div key={arr.id}>
                            <label htmlFor='name' className=' text-[#358597] text-xl font-bold float-left mt-7'>
                                {arr.type.toUpperCase()} :{" "}
                            </label>

                            <input
                                onChange={(e) => handleChange(e)}
                                type={arr.type}
                                name={arr.type}
                                required
                                placeholder={arr.type}
                                className='p-2 border border-[#358597]  rounded-xl pl-3 m-5 float-right'
                            />
                        </div>
                    ))}
                    <button className='my-5 btn bg-[#358597]  btn-ghost text-white '>Create Data</button>
                </form>
            </div>
            <div className=' text-center mt-12'>
                {apiURl ? (
                    <p className='text-blue-400 '>
                        <span className='text-3xl text-[#358597] font-bold mr-5'>Your api link is :-</span>{" "}
                        <a href={apiURl} target='_blank' className='link link-hover text-2xl'>
                            {apiURl}
                        </a>
                    </p>
                ) : (
                    ""
                )}
            </div>

            <DeleteData></DeleteData>
        </div>
    );gi
};

export default Generator;
