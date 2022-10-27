import styled from "styled-components"
import Button from "./Button"
import bgMobile from '../assets/bg-boost-mobile.svg'
import bgDesktop from '../assets/bg-boost-desktop.svg'

const StyledBoost = styled.section`
    padding-block: 5.625rem;
    text-align: center;
    background-color: ${({theme}) => theme.colors.veryDarkPurple};
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: top right;

    h3 {
        margin-bottom: 1rem;
        font-size: ${({theme}) => theme.fontSizes.lg};
        color: ${({theme}) => theme.colors.white};
        line-height: 48px;
        letter-spacing: -.7px;
    }

    @media ${({theme}) => theme.laptop} {
        background-image: url(${bgDesktop});
        padding-block: 3.5rem;

        h3 {
            margin-bottom: 2rem;
            font-size: ${({theme}) => theme.fontSizes.xl};
        }
    }
`

const Boost = () => {
    return (
        <StyledBoost>
            <h3>Boost your links today</h3>
            <Button
                text='Get Started'
             />
        </StyledBoost>
    )
}

export default Boost
