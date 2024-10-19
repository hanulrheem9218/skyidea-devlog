import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
const Searchbar = () => {

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        e.preventDefault();
        if(e.key == "Enter"){
            console.log("do validate");
            onSearch();
        }
    }

    const onSearch = () => {

    };
    const onChange = () => {

    };

  return (
    <div className= "input-container">
        <input placeholder="search..." className="input-field" onKeyDown={handleKeyDown} onChange={onChange}/>
        <RiSearch2Line size={12} className='input-icon'/>
        {/* <IoSearchCircleOutline color='black' size={24} className="input-icon"/> */}
    </div>
  )
}

export default Searchbar