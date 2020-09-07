import React from 'react';
import styled from 'styled-components';

const H1 = styled.div`
  background-color: black;
  height: 1000px;
`;

class Service extends React.Component {
  render() {
    return (
      <H1>
        <h1 style={{ color: 'blue' }}> Service</h1>
      </H1>
    );
  }
}

export default Service;
