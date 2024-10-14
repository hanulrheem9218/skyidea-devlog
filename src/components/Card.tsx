import React from "react";
import { CardProps } from "../interfaces/CardProps";

const Card: React.FC<CardProps> = ({
  index,
  title,
  description,
  imgSrc,
  date,
  tags,
  onClick,
}) => {

  const truncateText = (value:string, maxLength:number):string =>{
    return value.length < maxLength ? value : value.slice(0,maxLength) + "...";
  }
  return (
    <div className="card-container" onClick={onClick} key={index}>
      <div className="img-container">
        <img className="img" src={imgSrc} />
      </div>
      <div className="card-paragraph">
        <p className="text -medium">{truncateText(title!,20)}</p>
        <p className="text -extra-small">{truncateText(description!,32)}</p>
        <p className="text -extra-small">Date: {date?.toDateString()}</p>
      </div>
      <ul  className="tag-container">
        {tags?.map((value: string,index:number) => {
          return <li key={index} className="text -extra-small tag">{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
