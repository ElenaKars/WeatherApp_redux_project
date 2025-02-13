import { useNavigate } from "react-router-dom";

import { LayoutProps } from "./types";
import {
    LayoutWrapper,
    Header,
    NavContainer,
    Main,
    StyledNavLink,
    LinkLogo,
} from "./styles";


function Layout({ children }: LayoutProps) {
    const navigate = useNavigate();

    const goToHomePage = () => navigate("/");

    return (
        <LayoutWrapper>
            <Header>
                <LinkLogo to='/'>Weather App</LinkLogo>
                <NavContainer>
                    <StyledNavLink to='/'
                        style={({ isActive }) => ({ fontWeight: isActive ? "700" : "400" }
                        )}>Home</StyledNavLink>
                    <StyledNavLink to='/history'
                        style={({ isActive }) => ({ fontWeight: isActive ? "700" : "400" }
                        )}>History</StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
        </LayoutWrapper>
    );
}

export default Layout;
