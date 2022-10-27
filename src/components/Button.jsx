import styled from "styled-components"

const StyledButton = styled.button`
    cursor: pointer;
    width: ${props => props.width || '197px'};
    height: ${props => props.height || '57px'};
    /* padding: ${props => props.padding || '.8rem 2.55rem'}; */
    border: 0;
    border-radius: ${props => props.borderRad || '28px'};
    background-color: ${props => props.color || props.theme.colors.cyan};
    font-size: ${props => props.fontSize || props.theme.fontSizes.md2};
    color: ${props => props.textColor || props.theme.colors.white};
    font-weight: 700;
    transition: all .15s ease-in-out;

    &:hover {
        /* opacity: .6; */
        background-color: ${props => props.color || props.theme.colors.lightCyan};
    }
`

const Button = ({ text, ...props }) => {
    return (
        <StyledButton
            {...props}
        >
            {text}
        </StyledButton>
    )
}

export default Button