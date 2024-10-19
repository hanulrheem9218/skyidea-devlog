import { IoIosArrowDown } from "react-icons/io";
const Category = () => {
  return (
    <div className="category-container">
        <div className='category-container -title'><IoIosArrowDown className="arrows"/>Category</div>
        <ul className="tag-container">
            <li className="tag">Personal</li>
            <li className="tag">About Life</li>
            <li className="tag">Beginning Chapter</li>
        </ul>
    </div>
  )
}

export default Category