import styled from "styled-components"
// import image from '../assets/illustration-working.svg'
import cloud from '../assets/cloud.svg'
import working from '../assets/working.svg'
import Button from "./Button"
import Container from "./utils/Container"

const StyledHero = styled.section`
    padding-bottom: 10.5rem;
    padding-inline: 1.5rem;
    position: relative;

    &::before {
            content: '';
            width: 100%;
            height: 100%;
            /* width: 658px;
            height: 482px; */
            position: absolute;
            background-image: url(${cloud});
            background-repeat: no-repeat;
            background-size: 110%;
            /* background-size: 120%; */
            /* background-position: top; */
        }

    .hero__image {
        /* position: relative; */
        margin-block: 4.1875rem 3.75rem;
        /* background-image: url(${cloud});
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: 10% 100%; */

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
                    {/* <img src={cloud} alt="" /> */}
                </div>
                <div className="hero__text">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <Button 
                        text="Get Started"
                    />
                </div>
            </StyledHero>
        </Container>
    )
}

export default Hero
