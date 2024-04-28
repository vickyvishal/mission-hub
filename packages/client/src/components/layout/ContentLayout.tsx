import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../button/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  titleImageSrc?: string;
};

const ContentLayoutHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: baseline;
  }
`;
const ContentLayoutTitleImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const ContentLayoutTitle = styled.h2`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContentLayoutDescription = styled.h3`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContentLayoutHeaderKeyInfo = styled.div``;

const StyledContentLayout = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-size: 15px 15px;
  background-image: linear-gradient(
      to right,
      rgba(192, 192, 192, 0.3) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(192, 192, 192, 0.3) 1px, transparent 1px);
`;

const Content = styled.div``;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const NavMenuItem = styled.div`
  display: flex;
  gap: 1rem;
  & a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export default function ContentLayout({
  children,
  title,
  subTitle,
  titleImageSrc,
}: ContentLayoutProps) {
  const navigate = useNavigate(); //either use navigate or Link

  return (
    <StyledContentLayout>
      <NavMenu>
        <NavMenuItem>
          <Link to="/">Home</Link>
          <PrimaryButton
            title="Simulation"
            onClick={() => navigate("/simulator")}
            icon={<FontAwesomeIcon icon={faRocket} />}
          />
        </NavMenuItem>
      </NavMenu>

      <ContentLayoutHeader>
        <ContentLayoutHeaderKeyInfo>
          <ContentLayoutTitle>{title}</ContentLayoutTitle>
          <ContentLayoutDescription>{subTitle}</ContentLayoutDescription>
        </ContentLayoutHeaderKeyInfo>
        {titleImageSrc && (
          <ContentLayoutTitleImage src={titleImageSrc} alt={title} />
        )}
      </ContentLayoutHeader>
      <Content>{children}</Content>
    </StyledContentLayout>
  );
}
