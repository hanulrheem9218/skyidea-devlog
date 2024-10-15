import React from "react";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface ContentProps {
  index?: number[];
  paragraphs?: string[];
  imgSrcs?: string[];
}
interface ContentData {
  index: number;
  paragraph: string;
  position?: string;
  imgSrc?: string;
  imgDesc?: string;
}
const Content: React.FC<ContentProps> = () => {
  const [datas, setDatas] = useState<ContentData[]>([]);
  // make it called once.
  useEffect(() => {
    const apiCall = (id: number) => {
      console.log(id);
      setDatas([
        {
          index: 1,
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n \n \n stellar blade.",
        },
        {
          index: 2,
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          position: "left",
          imgSrc: "/exampleDraw.jpg",
          imgDesc: `"Figure 1. example.jpg"`,
        },
        {
          index: 3,
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          position: "right",
          imgSrc: "/example.jpg",
          imgDesc: `"Figure 2. example.jpg"`,
        },
        {
          index: 4,
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          position: "center",
          imgSrc: "/example.jpg",
          imgDesc: `"Figure 3. example.jpg"`,
        },
        {
          index: 5,
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ]);
    };
    apiCall(2);
  }, []);

  return (
    <div className="content-container">
      <p className="text -medium">Stellar blade</p>
      {datas.map((value: ContentData) => {
        return (
          <div className={`content-item -${isMobile ? "center" :value.position}`}>
            {value.imgSrc === undefined && value.imgDesc === undefined ? (
              <p className="text -small content-paragraph">
                {value.paragraph
                  .split("\n")
                  .map((line: string, index: number) => {
                    return (
                      <React.Fragment key={index}>
                        {line}
                        {index < value.paragraph.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    );
                  })}
              </p>
            ) : (
              <>
                <div className="content-frame">
                  <img className="content-img" src={value.imgSrc} />
                  <p className="text -small">{value.imgDesc}</p>
                </div>
                <p className="text -small content-paragraph">
                  {value.paragraph}
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Content;
