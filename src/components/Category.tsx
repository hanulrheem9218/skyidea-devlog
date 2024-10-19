import { IoIosArrowDown } from "react-icons/io";
const Category = () => {
  return (
    <div className="category-container">
        <div className='category-container -title'><p className="text-none">Category</p><IoIosArrowDown className="arrows"/></div>
        <ul className="category-container -tag-list">
            <li className="category-container -tag">Personal</li>
            <li className="category-container -tag">About Life</li>
            <li className="category-container -tag">Beginning Chapter</li>
            <li className="category-container -tag">Beginning Chapter</li>
            <li className="category-container -tag">Beginning Chapter</li>
            <li className="category-container -tag">Beginning Chapter</li>
            <li className="category-container -tag">Beginning Chapter</li>
            <li className="category-container -tag">Beginning Chapter</li>
        </ul>
    </div>
  )
}

export default Category