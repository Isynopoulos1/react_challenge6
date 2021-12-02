import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import {
  CardWrapper,
  Title,
  Author,
  Icon1,
  Icon2,
  CardImage
} from "./Card.styles";

const Card = ({ image, title, author }) => {
  return (
    <CardWrapper>
      <CardImage src={image} />
      <Title>
        <p>{title}</p>
      </Title>
      <Author>
        <p>{author}</p>
      </Author>
      <Icon1>favorite_border</Icon1>
      <Icon2>favorite_border</Icon2>
    </CardWrapper>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.number,
  author: PropTypes.string
};

Card.defaultProps = {
  image: "",
  title: "",
  author: ""
};

export default Card;
