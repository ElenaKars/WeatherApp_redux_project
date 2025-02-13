export interface ButtonProps {
  id?: string
  name?: string
  type?: "submit" | "button" | "reset"
  onClick?: () => void
  disabled?: boolean
}
