import Container from "../components/Container";
import Card from "../components/Card";
import { CardProps } from "../interfaces/CardProps";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Blank = () => {
  const navigator = useNavigate();
  const datas: CardProps[] = [];
  for (let i = 0; i < 10; i++) {
    datas.push({
      index: i,
      title: `My Junior Artist experience.. ${i}`,
      description: "what's game developer ? and who is it for",
      imgSrc: "../exampleDraw.jpg",
      date: new Date("2024-10-13"),
      tags: ["About Life", "Beginning Chapter", "Personal"],
    });
  }
  return (
    <div>
      <Navbar />
      <Container>
        {datas.map((value: CardProps) => {
          return (
            <Card
              onClick={() => {
                navigator("viewer");
              }}
              title={value.title}
              description={value.description}
              imgSrc={value.imgSrc}
              date={value.date}
              tags={value.tags}
              key= {value.index}
            />
          );
        })}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Blank;
