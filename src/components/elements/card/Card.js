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
  Visibility,
  Likes,
  Viewers
} from "./Card.styles";

const Card = ({ image, title, author, icon1, icon2, likes, visibility }) => {
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
              <Likes>{likes}</Likes>
            </Like>
            <Visibility>
              <Icon2>{icon2}</Icon2>
              <Viewers>{visibility}</Viewers>
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
  likes: PropTypes.string,
  icon2: PropTypes.string,
  visibility: PropTypes.string
};

Card.defaultProps = {
  image: "",
  title: "",
  author: "",
  icon1: "",
  likes: "",
  icon2: "",
  visibility: ""
};

export default Card;
