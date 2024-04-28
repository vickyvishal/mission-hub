import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  margin: 0;
`;

export default function Footer({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <StyledFooter>
      <Title>{title}</Title>
      {subtitle && <Subtitle>: {subtitle}</Subtitle>}
    </StyledFooter>
  );
}
