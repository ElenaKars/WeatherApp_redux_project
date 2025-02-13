interface WeatherData {
  id?: string
  temp: string
  iconUrl: string
  city: string
}

export interface WeatherAppSliceState {
  currentData: WeatherData
  status: "default" | "success" | "error" | "loading"
  error: any
  historyData: WeatherData[]
}
