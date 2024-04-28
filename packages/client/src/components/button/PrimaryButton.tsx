import styled from "styled-components";

const StyledPrimaryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 1rem;
`;

export default function PrimaryButton({
  title,
  onClick,
  icon,
  disabled,
}: {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  styles?: React.CSSProperties;
  disabled?: boolean;
}) {
  return (
    <StyledPrimaryButton
      onClick={onClick && onClick}
      disabled={disabled}
      style={disabled ? { background: "gray" } : {}}
    >
      {title} {icon}
    </StyledPrimaryButton>
  );
}
