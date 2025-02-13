import styled from "@emotion/styled"
import { Link, NavLink } from "react-router-dom"
import background from "./../../assets/background.png"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: Inter, sans-serif;
  background-image: url(${background});
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 105px;
  background-color: white;
  height: 80px;
  background-color: rgba(18, 45, 77, 0.6);
  border-bottom: 1px solid white;
  color: white;
`

export const LinkLogo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 600;
  opacity: 100%;
`
export const NavContainer = styled.nav`
  display: flex;
  gap: 63px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
  opacity: 100%;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 94px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #6f6f6f;
  width: 710px;
  margin: auto;
`
