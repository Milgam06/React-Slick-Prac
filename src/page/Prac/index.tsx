import Slider from "react-slick";

import * as S from "./styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderPage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.PracContentContainer>
      <Slider {...settings}>
        <S.PracContentWrapper>1</S.PracContentWrapper>
        <S.PracContentWrapper>2</S.PracContentWrapper>
        <S.PracContentWrapper>3</S.PracContentWrapper>
        <S.PracContentWrapper>4</S.PracContentWrapper>
        <S.PracContentWrapper>5</S.PracContentWrapper>
      </Slider>
    </S.PracContentContainer>
  );
};
