export interface WeatherCardProps {
  city: string
  temp: string
  iconUrl: string
  onDelete?: () => void
  isHistory?: boolean
}
