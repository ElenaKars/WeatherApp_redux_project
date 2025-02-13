import styled from "@emotion/styled"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  color: #6f6f6f;
  line-height: 24px;
`

export const InputStyled = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  height: 100%;
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid white;
  background-color: transparent;
  &::placeholder {
    color: white;
    visibility: 100%;
  }
`

export const Label = styled.label``

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 14px;
`
