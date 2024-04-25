import React from "react";
import styled from "styled-components";
import background from "../../assets/image.png";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const HeaderBackground = styled.div`
  position: relative;
  padding: 10px;
  color: white;
`;

const HeaderTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const StyledContentLayout = styled.div`
  min-height: 100vh;
  background-size: 15px 15px;
  background-image: linear-gradient(
      to right,
      rgba(192, 192, 192, 0.3) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(192, 192, 192, 0.3) 1px, transparent 1px);
`;

const Content = styled.div`
  padding: 1rem;
`;

export default function ContentLayout({ children, title }: ContentLayoutProps) {
  return (
    <StyledContentLayout>
      <HeaderBackground>
        <HeaderImage src={background} />
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderBackground>
      <Content>{children}</Content>
    </StyledContentLayout>
  );
}
