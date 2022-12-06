import React, { useRef } from "react";

const DeleteData = () => {
    const textInput = useRef(null);
    const handleDelete = () => {
        const inputData = textInput.current.value;

        fetch(`${process.env.REACT_APP_SERVER_LINK}/deleteData?name=${inputData}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    const handleClear = () => {
        const userConfirm = window.confirm("do your want to clear all");
        console.log(userConfirm);
        if (userConfirm) {
            fetch(`${process.env.REACT_APP_SERVER_LINK}/clearAll`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        }
    };
    return (
        <div>
            <div>
                <button onClick={handleClear} className='btn btn-error'>
                    Clear All Data
                </button>
            </div>
            <div className='card shadow-2xl w-1/4 p-8 bg-[#F4A896]    mt-5'>
                <h1 className='text-4xl text-[#358597] text-center'>single data delete</h1>
                <div className='flex items-center mt-5'>
                    <label htmlFor='name' className='mr-2 text-2xl font-bold  text-[#358597] '>
                        Name
                    </label>
                    <input ref={textInput} type='text' name='name' className='input input-bordered mr-4' />
                </div>
                <button onClick={handleDelete} className='btn btn-error mt-4 '>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteData;
