import React from "react";
import { CardProps } from "../interfaces/CardProps";

const Card: React.FC<CardProps> = ({
  title,
  description,
  imgSrc,
  date,
  tags,
  onClick,
}) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="img-container">
        <img className="img" src={imgSrc} />
      </div>
      <div className="card-paragraph">
        <p className="text -medium">{title}</p>
        <p className="text -small">{description}</p>
        <p className="text -small">Date: {date?.toDateString()}</p>
      </div>
      <ul>
        {tags?.map((value: string) => {
          return <li>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
