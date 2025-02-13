import Button from "components/Button/Button";
import { ButtonWrapper, DeleteBtnWrapper, DeleteButton, HistoryBlock, HistoryWrapper } from "./styles";
import WeatherCard from "components/WeatherCard/WeatherCard";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherAppActions, weatherAppSelectors } from "store/redux/weatherAppSlice/weatherAppSlice";
import { v4 } from "uuid";

function HistoryPage() {
  const { historyData } = useAppSelector(weatherAppSelectors.weatherData);
  const dispatch = useAppDispatch();

  const deleteCard = (id: string) => {
    dispatch(weatherAppActions.deleteCard(id));
  };
  const weahterCards = historyData.map((card) => {
    return (
      <WeatherCard
        key={card.id}
        city={card.city}
        temp={card.temp}
        iconUrl={card.iconUrl}
        isHistory={true}
        onDelete={() => deleteCard(card.id)}>
      </WeatherCard >
    );
  });
  const deleteAll = () => {
    dispatch(weatherAppActions.deleteAll());
  };
  return (
    <HistoryWrapper>
      <HistoryBlock>
        {weahterCards}
      </HistoryBlock>
      <ButtonWrapper>
        {historyData.length > 0 && <Button name="Delete All" onClick={deleteAll} />}
      </ButtonWrapper>
    </HistoryWrapper>
  );
}

export default HistoryPage;