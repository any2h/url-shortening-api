import styled from "styled-components"
import cloud from '../assets/cloud.svg'
import working from '../assets/working.svg'
import Button from "./Button"
import Container from "./utils/Container"

const StyledHero = styled.section`
    padding-bottom: 10.5rem;
    position: relative;

    &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -10;
            background-image: url(${cloud});
            background-repeat: no-repeat;
            background-size: 139%;
            left: 15%;
            bottom: 5%;
        }

    .hero__image {
        margin-block: 4.1875rem 3.75rem;


        img {
            position: relative;
            width: 100%;
        }
    }

    .hero__text {
        text-align: center;

        h1 {
            font-size: clamp(${({theme}) => theme.fontSizes.xl2}, 6.5vw, ${({theme}) => theme.fontSizes.xxl});
            line-height: clamp(3rem, 7vw, 5.625rem);
            color: ${({theme}) => theme.colors.obsidian}
        }

        p {
            font-size: ${({theme}) => theme.fontSizes.md1};
            margin-block: .9375rem 2rem;
        }
    }

    @media ${({theme}) => theme.laptop} {
        display: flex;
        gap: 80px;
        padding-block: 8.75rem 12.1875rem;

        &::before {
            background-size: 60%;
            left: 64%;
            bottom: -12%;
        }

        .hero__image {
            order: 1;
            flex: 5;
            margin-block: 0;
        }

        .hero__text {
            flex: 6;
            text-align: left;

            h1 {
                letter-spacing: -3px;
            }

            p {
                margin-block: .3125rem 2.375rem;
                font-size: ${({theme}) => theme.fontSizes.md3};
            }
        }
    }
`

const Hero = () => {
    return (
        <Container>
            <StyledHero>
                <div className="hero__image">
                    <img src={working} alt="illustration working" />
                </div>
                <div className="hero__text">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <a href="#shortener">
                        <Button 
                            text="Get Started"
                        />
                    </a>
                </div>
            </StyledHero>
        </Container>
    )
}

export default Hero
