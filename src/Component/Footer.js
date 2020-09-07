import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 150px;
  background-color: #eaac9c;
`;

const FotterDescription = styled.h2`
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  padding-top: 30px;
  color: white;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FotterDescription>
          ㈜이브자리 서울특별시 강남구 영동대로114길5 (삼성동)대표이사 : 고춘홍,
          <br />
          윤종웅 사업자등록번호 : 105-81-42298통신판매업신고 :<br />
          제2009-서울강남-01376호 COPYRIGHT © SIGNATURE BED ALL rights reserved.
        </FotterDescription>
      </FooterContainer>
    </>
  );
};

export default Footer;
