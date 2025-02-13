import styled from "@emotion/styled"

interface MainButtonStyledProps {
  disabled: boolean
}

export const MainButton = styled.button<MainButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 10px 40px;
  background-color: ${({ disabled }) => (disabled ? "#bebec7" : "#3678b4")};
  border: none;
  border-radius: 50px;
  font-size: 18px;
  color: white;
  font-weight: 200;
`
