import ViewContainer from "../components/ViewContainer";
import Card from "../components/Card";
import { CardProps } from "../interfaces/CardProps";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ControlPanel from "../components/ControlPanel";
import { isMobile } from "react-device-detect";

const Devlog = () => {
  const navigator = useNavigate();
  const datas: CardProps[] = [];
  for (let i = 0; i < 10; i++) {
    datas.push({
      index: i,
      title: `My Junior Artist experience.. ${i}`,
      description: "what's game developer ? and who is it for",
      imgSrc: "../test05.png",
      date: new Date("2024-10-13"),
      tags: ["About Life", "Beginning Chapter", "Personal"],
    });
  }
  return (
    <div>
      <Navbar />
      <Container>
        <ViewContainer>
          {datas.map((value: CardProps) => {
            return (
              <Card
                onClick={() => {
                  navigator("/viewer");
                }}
                title={value.title}
                description={value.description}
                imgSrc={value.imgSrc}
                date={value.date}
                tags={value.tags}
                key={value.index}
              />
            );
          })}
        </ViewContainer>
        {isMobile ? null : <ControlPanel />}
      </Container>

      <Footer />
    </div>
  );
};

export default Devlog;
