import styled from "styled-components"
import Container from "./utils/Container"
import FeatureCard from './FeatureCard'
import Shortener from "./Shortener"
import icon1 from '../assets/icon-brand-recognition.svg'
import icon2 from '../assets/icon-detailed-records.svg'
import icon3 from '../assets/icon-fully-customizable.svg'

const StyledFeatures = styled.section`
    background-color: ${({ theme }) => theme.colors.lightGray};

    .features {
        position: relative;
        padding-block: 0 5rem;

        &__intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 5.75rem;
            text-align: center;

            h3 {
                margin-bottom: 1rem;
                font-size: ${({theme}) => theme.fontSizes.lg};
                color: ${({theme}) => theme.colors.obsidian};
            }

            p {
                max-width: 45ch;
            }
        }

        &__grid {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5.75rem;

            &::before {
                content: '';
                position: absolute;
                width: 8px;
                height: 100%;
                background-color: ${({theme}) => theme.colors.cyan};
            }
        }

        @media ${({theme}) => theme.laptop} {
            padding-block: 0 7.5rem;

            &__intro {
                margin-bottom: 0;

                h3 {
                    margin-bottom: 1.125rem;
                    font-size: ${({theme}) => theme.fontSizes.xl};
                }

                p {
                    font-size: ${({theme}) => theme.fontSizes.md1};
                }
            }

            &__grid {
                flex-direction: row;
                gap: 1.875rem;

                &::before {
                    width: 99%;
                    height: 8px;
                }

                > :nth-child(2) {
                    margin-top: 5.5rem;
                }

                > :nth-child(3) {
                    margin-top: 11.75rem;
                }
            }
        }
    }
`

const Features = () => {
  return (
    <StyledFeatures id="features">
        <Container className="features">
            <Shortener />

            <div className="features__intro">
                <h3>Advanced Statistics</h3>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className="features__grid">
                <FeatureCard
                    src={icon1}
                    name='Brand Recognition'
                    text='Boost your brand recognition with each click.
                        Generic links don’t mean a thing.
                        Branded links help instil confidence in your content.'
                />
                <FeatureCard
                    src={icon2}
                    name='Detailed Records'
                    text='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                />
                <FeatureCard
                    src={icon3}
                    name='Fully Customizable'
                    text='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                />
            </div>
        </Container>
    </StyledFeatures>
  )
}

export default Features
