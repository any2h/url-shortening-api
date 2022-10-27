import styled from "styled-components"

const StyledCard = styled.article`
    position: relative;
    max-width: 350px;
    height: 267px;
    padding: 4.8rem 2rem 2.75rem;
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    border-radius: 5px;

    div {
        position: absolute;
        left: 50%;
        translate: -50% 0;
        top: -15%;
        display: grid;
        place-content: center;
        width: 88px;
        height: 88px;
        background-color: #3A3054;
        border-radius: 50%;
    }

    h4 {
        font-size: ${({theme}) => theme.fontSizes.md3};
        color: ${({theme}) => theme.colors.black};
        margin-bottom: .75rem;
    }

    p {
        font-size: ${({theme}) => theme.fontSizes.sm};
        font-weight: 500;
        line-height: 26px;
    }

    @media ${({theme}) => theme.laptop} {
        text-align: left;

        div {
            left: 9%;
            translate: 0;
        }
    }
`

const FeatureCard = ({ src, name, text }) => {
    return (
        <StyledCard>
            <div>
                <img src={src} alt={name} />
            </div>
            <h4>{name}</h4>
            <p>{text}</p>
        </StyledCard>
    )
}

export default FeatureCard
