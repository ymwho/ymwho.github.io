import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Section from './Section';
import SectionSecond from './SectionSecond';
import Footer from './Footer';

const Container = styled.div``;

const HomeImages = styled.div`
  position: relative;
  z-index: -999;
`;
const HomeImg = styled.img`
  width: 100%;
  height: 100vh;
`;
const ButtonLeft = styled.h2`
  position: absolute;
  bottom: 30px;
  left: 761px;
  font-size: 12px;
  color: white;
`;
const ButtonRight = styled.h2`
  position: absolute;
  bottom: 30px;
  left: 781px;
  font-size: 12px;
  color: white;
`;

const HomeTitle = styled.div`
  position: absolute;
  color: white;
  top: 200px;
  left: 65px;
  font-size: 35px;
  opacity: 0.9;
  line-height: 70px;
`;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const allSlide = 3;
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= allSlide) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX (-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <Container ref={slideRef}>
        <HomeImages>
          <HomeImg
            src={require(`./imgs/${currentSlide}.jpg`)}
            alt='Carousel1'
          />
        </HomeImages>

        <ButtonLeft onClick={prevSlide}>
          <i className='far fa-circle'></i>
        </ButtonLeft>

        <HomeTitle>
          #일상스타그램 #오늘 <br />
          #일상기록 #일기 #감성글램핑
        </HomeTitle>

        <ButtonRight onClick={nextSlide}>
          <i className='far fa-circle'></i>
        </ButtonRight>
      </Container>
      <Section />
      <SectionSecond />
      <Footer />
    </>
  );
};

export default Carousel;
