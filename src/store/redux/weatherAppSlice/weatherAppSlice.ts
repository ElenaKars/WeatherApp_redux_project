import { createAppSlice } from "store/createAppSlice"
import { WeatherAppSliceState } from "./types"
import axios from "axios"
import { v4 } from "uuid"
import { current } from "@reduxjs/toolkit"

const KEY = "56dc85cde04929bf987f47482952287a"

const weatherAppInitialState: WeatherAppSliceState = {
  currentData: { city: "", temp: "", iconUrl: "" },
  status: "default",
  error: undefined,
  historyData: [],
}

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: weatherAppInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (city: string, thunkApi) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`,
          )
          // if (!response || !response.data) {
          //   throw new Error("Invalid response from the API")
          // }
          return response.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: WeatherAppSliceState) => {
          state.currentData = { city: "", temp: "", iconUrl: "" }
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherAppSliceState, action: any) => {
          const tempCelsius = (action.payload.main.temp - 273.15).toFixed(1)

          const newWeatherData = {
            id: `${v4()}`,
            city: action.payload.name,
            temp: `${tempCelsius}°C`,
            iconUrl: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
          }
          state.currentData = newWeatherData
          state.status = "success"
          state.historyData = [...state.historyData, newWeatherData]
        },
        rejected: (state: WeatherAppSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload.message
        },
      },
    ),
    deleteAll: create.reducer(state => {
      state.historyData = []
    }),
    clearCurrentData: create.reducer(state => {
      state.currentData = { city: "", temp: "", iconUrl: "" }
    }),
    deleteCard: create.reducer((state: WeatherAppSliceState, action: any) => {
      state.historyData = state.historyData.filter(
        card => card.id !== action.payload,
      )
    }),
  }),
  selectors: {
    weatherData: (state: WeatherAppSliceState) => state,
  },
})

export const weatherAppActions = weatherAppSlice.actions
export const weatherAppSelectors = weatherAppSlice.selectors
