import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import {
  CardWrapper,
  ContentGrid,
  Title,
  Author,
  Icon1,
  Icon2,
  CardImage,
  CardDetail,
  Scope,
  Project,
  Image,
  Like,
  Visibility
} from "./Card.styles";

const Card = ({ image, title, author, icon1, icon2 }) => {
  return (
    <CardWrapper>
      <ContentGrid>
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
            <Like>
              <Icon1>{icon1}</Icon1>
              <p>32</p>
            </Like>
            <Visibility>
              <Icon2>{icon2}</Icon2>
              <p>32</p>
            </Visibility>
          </Scope>
        </CardDetail>
      </ContentGrid>
    </CardWrapper>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  icon1: PropTypes.string,
  icon2: PropTypes.string
};

Card.defaultProps = {
  image: "",
  title: "",
  author: "",
  icon1: "",
  icon2: ""
};

export default Card;
