import React from 'react';
import styled from 'styled-components';

const Glam = styled.div`
  height: 900px;
  background-color: #e5e0e2;
`;

const H = styled.h1`
  color: #7db0bc;
  font-weight: bold;
  font-size: 50px;
  padding-top: 100px;
  padding-left: 150px;
`;

const GlamItem = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

const GlamItems = styled.img`
  width: 360px;
  height: 480px;
`;

const GlamContainer = styled.div`
  position: relative;
  margin: 0px 40px;
`;

const GlamHover = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  &:hover {
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    color: yellow;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    opacity: 0.8;
    animation-name: fadeIn;
    animation: fadeIn 400ms ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SectionSecond = () => {
  return (
    <>
      <Glam>
        <H>
          <i
            class='fas fa-caret-up'
            style={{
              fontSize: '25px',
              color: '#FF5959',
              position: 'relative',
              top: '-50px',
            }}
          ></i>
          Glam Items
        </H>

        <GlamItem>
          <GlamContainer>
            <GlamItems src={require('./imgs/44.jpg')} alt='I1' />
            <GlamHover>#A세트</GlamHover>
          </GlamContainer>

          <GlamContainer>
            <GlamItems src={require('./imgs/55.jpg')} alt='I2' />
            <GlamHover> #B세트</GlamHover>
          </GlamContainer>

          <GlamContainer>
            <GlamItems src={require('./imgs/66.jpg')} alt='I3' />
            <GlamHover> #카크닉</GlamHover>
          </GlamContainer>
        </GlamItem>
      </Glam>
    </>
  );
};

export default SectionSecond;
