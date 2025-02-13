import styled from "@emotion/styled"

export const WeatherCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  background-color: rgba(18, 45, 77, 0.6);
  padding: 22px 35px;
  justify-content: start;
  gap: 100px;
  align-items: flex-start;
  border-radius: 15px;
  position: relative;
`
export const OutputBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: fit-content;
  padding: 20px 0;
  gap: 15px;
  flex-wrap: wrap;
`
export const TemperatureBlock = styled.div`
  font-size: 57px;
`

export const City = styled.div`
  padding-left: 10px;
  font-size: 20px;
  line-height: 24px;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`
export const IconWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 80px;
  gap: 1px;
`
export const DeleteBtnWrapper = styled.div`
  width: 50%;
`

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  color: white;
  font-size: 10px;
  font-weight: bold;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`
