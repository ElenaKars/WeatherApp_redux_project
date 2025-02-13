import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "store/hooks";
import * as Yup from 'yup';

import { HomePageWrapper, FormSearch, SearchWrapper, ResultBlock, ButtonWrapper } from "./styles";
import { SearchForm } from "./types";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import WeatherCard from "components/WeatherCard/WeatherCard";
import { weatherAppActions, weatherAppSelectors } from "store/redux/weatherAppSlice/weatherAppSlice";
import Spinner from "components/Spinner/Spinner";
import ErrorCard from "components/ErrorCard/ErrorCard";


function Home() {
  const { currentData, status, error } = useAppSelector(weatherAppSelectors.weatherData);
  const { city: currentCity, temp: currentTemp, iconUrl: currentIconUrl } = currentData;
  const dispatch = useAppDispatch();


  const schema = Yup.object().shape({
    city: Yup.string().required("Field cannot be empty. Enter city name.")
      .matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "City name must only contain letters and spaces")
  });

  const formik = useFormik({
    initialValues: {
      city: ''
    } as SearchForm,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => {

      dispatch(weatherAppActions.clearCurrentData());
      dispatch(weatherAppActions.getWeather(values.city));
    }
  });

  const isButtonDisabled = status === 'loading' || !formik.values.city;
  const shouldShowWeatherCard = status === 'success' && currentCity && currentTemp && currentIconUrl;
  const shouldShowErrorCard = status === 'error' && error;

  return (
    <HomePageWrapper>
      <FormSearch onSubmit={formik.handleSubmit}>
        <SearchWrapper>
          <Input name='city' placeholder="Enter city name" value={formik.values.city} onChange={formik.handleChange} error={formik.errors.city} />
          <ButtonWrapper>
            <Button name="Search" type="submit" disabled={isButtonDisabled} />
          </ButtonWrapper>
        </SearchWrapper>
      </FormSearch>
      {status === 'loading' && <Spinner />}
      {shouldShowErrorCard && <ErrorCard errorMessage={error} />}
      <ResultBlock>
        {shouldShowWeatherCard && <WeatherCard city={currentCity} temp={currentTemp}
          iconUrl={currentIconUrl} isHistory={false} />}
      </ResultBlock>
    </HomePageWrapper >
  );
}

export default Home;
