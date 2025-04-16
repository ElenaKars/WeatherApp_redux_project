import styled from "@emotion/styled"

export const HistoryWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  overflow: hidden;
  flex-grow: 1;
`

export const HistoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px 0;
  max-height: 600px;
  gap: 15px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const DeleteBtnWrapper = styled.div`
  width: 50%;
  position: sticky;
  bottom: 0;
`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: grey;
  color: white;
  font-size: 0.625rem;
  font-weight: bold;
  border: none;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`
