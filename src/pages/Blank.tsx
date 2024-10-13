import Container from "../components/Container";
import Card from "../components/Card";
import { CardProps } from "../interfaces/CardProps";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blank = () => {

    const datas:CardProps[] = [];
    for(let i = 0; i < 9; i++){
        datas.push({title:`Project ${i}`,description:"Project description...",imgSrc:"../public/example.jpg", date: new Date("2024-10-13"), tags: ["c#", "c++"]});
    }
  return (
    <div>
    <Navbar/>
      <Container>
        {datas.map((value:CardProps) => {
            return <Card title={value.title} description={value.description} imgSrc={value.imgSrc} date={value.date} tags={value.tags}/>
        })}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Blank;
