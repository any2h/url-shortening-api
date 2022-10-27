import styled from "styled-components"

const StyledContainer = styled.div`
    max-width: 69.375rem;
    margin-inline: auto;
    padding-inline: ${props => props.paddingX || '1.5rem'};
    /* background-color: ${props => props.color}; */
`

const Container = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
        {children}
    </StyledContainer>
  )
}

export default Container
