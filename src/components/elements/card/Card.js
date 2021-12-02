import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import {
  CardWrapper,
  Title,
  Author,
  Icon1,
  Icon2,
  CardImage,
  CardDetail,
  Scope,
  Project,
  Image
} from "./Card.styles";

const Card = ({ image, title, author }) => {
  return (
    <CardWrapper>
      <Image>
        <CardImage src={image} />
      </Image>

      <CardDetail>
        <Project>
          <Title>
            <p>{title}</p>
          </Title>
          <Author>
            <p>{author}</p>
          </Author>
        </Project>
        <Scope>
          <Icon1>favorite_border</Icon1>
          <Icon2>favorite_border</Icon2>
        </Scope>
      </CardDetail>
    </CardWrapper>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
};

Card.defaultProps = {
  image: "",
  title: "",
  author: ""
};

export default Card;
