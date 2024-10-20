import { ViewerProps } from "../interfaces/ViewerProps";
//import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Viewer: React.FC<ViewerProps> = () => {
  //const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="viewer-container">
        <Content />
      </div>
      <Footer/>
    </div>
  );
};

export default Viewer;
