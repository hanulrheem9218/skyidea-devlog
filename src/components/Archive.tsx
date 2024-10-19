import { IoIosArrowDown } from "react-icons/io";

const Archive = () => {
  return (
    <div className="archive-container">
      <div className="archive-container -title">
        Archive <IoIosArrowDown className="arrows" />
      </div>
      <ol className="archive-container -list">
        <li className="archive-container -list-item">
          <p className="archive-container -year">2022</p>
          <ol className="archive-container -date-list">
            <li className="archive-container -list-item">feb 24</li>
            <li className="archive-container -list-item">feb 23</li>
          </ol>
        </li>
        <li className="archive-container -list-item">
          <p className="archive-container -year">2022</p>
          <ol className="archive-container -date-list">
            <li className="archive-container -list-item">feb 24</li>
            <li className="archive-container -list-item">feb 23</li>
          </ol>
        </li>
        <li className="archive-container -list-item">
          <p className="archive-container -year">2022</p>
          <ol className="archive-container -date-list">
            <li className="archive-container -list-item">feb 24</li>
            <li className="archive-container -list-item">feb 23</li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Archive;
