import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Both = styled.div`
  background: linear-gradient(185deg, #d1af94 58.45%, #efcec5 58.5%);
  height: 900px;
  margin-top: 100px;
`;

const BothContainer = styled.div`
  display: flex;
`;

const BothLeft = styled.div`
  position: relative;
  left: -200px;
  visibility: hidden;
  flex-basis: 50%;
  font-weight: bold;
`;

const BothRight = styled.div`
  flex-basis: 50%;
  text-align: center;
  position: relative;
  opacity: 0;
`;

const ImageHor = styled.img`
  width: 550px;
  height: 600px;
  padding-top: 250px;
`;

const BothTitle = styled.h1`
  font-size: 40px;
  padding-top: 100px;
  color: white;
  text-align: center;
`;
const P = styled.div`
  font-size: 17px;
  color: #d1eff1;
  line-height: 40px;
  padding: 100px 170px;
`;

const Section = () => {
  const LeftRef = useRef(null);
  const RightRef = useRef(null);
  const LeftHeight = 500;
  const RightHeight = 700;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (LeftHeight <= window.scrollY) {
        LeftRef.current.style.visibility = 'visible';
        LeftRef.current.style.left = '0px';
        LeftRef.current.style.transition = 'all 300ms ease-in-out';
      }
    });

    window.addEventListener('scroll', () => {
      if (RightHeight <= window.scrollY) {
        RightRef.current.style.opacity = '1';
        RightRef.current.style.transition = 'all 300ms ease-in-out';
      }
    });
  });

  return (
    <Both>
      <>
        <BothContainer>
          <BothLeft ref={LeftRef}>
            <BothTitle>안녕하세요 반갑습니다 :)</BothTitle>
            <P>
              나는 내가 보고 듣고 말한것을 여기에 그대로! 가감없이! <br />
              사실대로! 적었고 악평이 만발한 후기를 썼다. 물론 나는 <br />
              이렇게 다녀왔어도 누군가는 기분좋게 캠핑하고 갔을 것이다. 내
              후기가 이 글램핑장의 절대모습이라고는 볼 수 없으며 나와 <br />
              내 짝꿍만이 최악의 상황을 겪은건지도 모른다. } 블루웨일캠핑장을
              갈것이라면 위의 내가 겪은 일들이 혹시 <br />
              일어날 지 모르니 참고하여 잘 준비하고
              <br />
              갔으면 하는 바램을 가지며 후기를 마친다.
            </P>
          </BothLeft>

          <BothRight ref={RightRef}>
            <ImageHor src={require('./imgs/15.jpg')} alt='temp' />
          </BothRight>
        </BothContainer>
      </>
    </Both>
  );
};

export default Section;
