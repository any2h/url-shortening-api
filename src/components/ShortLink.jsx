import styled from "styled-components"
import Button from "./Button"

const StyledShortLink = styled.li`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 12px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;

    .orig {
        position: relative;
        margin-bottom: .75rem;
        color: ${({theme}) => theme.colors.obsidian};

        &::before {
            content: '';
            position: absolute;
            left: -.9rem;
            right: -.9rem;
            bottom: -12.5px;
            height: 1px;
            background-color: ${({theme}) => theme.colors.gray};
            opacity: .5;
        }
    }

    .short {
        color: ${({theme}) => theme.colors.cyan};
        transition: all .15s ease-in-out;

        &:hover {
            color: ${props => props.color || props.theme.colors.lightCyan};
        }
    }

    button {
        width: 100%;
        height: 40px;
        font-size: ${({theme}) => theme.fontSizes.reg};
    }

    @media ${({theme}) => theme.laptop} {
        flex-direction: row;
        align-items: center;
        padding-inline: 1.5rem;
        gap: 1.5rem;

        .orig {
            margin-right: auto;
            margin-bottom: 0;

            &::before {
                display: none;
            }
        }

        button {
            font-size: ${({theme}) => theme.fontSizes.sm};
            width: 103px;
        }
    }
`

const ShortLink = ({ id, orig, short, isCopied, setLinks }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText('https://' + short)
        setLinks(prevState => 
            prevState.map(link => link.id === id 
                ? {...link, isCopied: true} 
                : {...link, isCopied: false})
        )
    }

    return (
        <StyledShortLink>
            <div className="orig">{orig}</div>
            <div className="short">
                <a href={'https://' + short} target='_blank'>{short}</a>
            </div>
            <Button
                text={isCopied ? 'Copied!' : 'Copy'}
                color={isCopied ? '#3A3054' : ''}
                borderRad='5px'
                onClick={handleCopy}
            />
        </StyledShortLink>
  )
}

export default ShortLink
