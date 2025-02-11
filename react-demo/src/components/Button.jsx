import React from "react";

export default function Button({text, funcionalidad}) {
    return (
        <div>
            <button 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => funcionalidad()}>
        {text}</button>
         </div>
    )
}

