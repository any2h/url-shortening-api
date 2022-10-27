import styled from "styled-components"

const StyledContainer = styled.div`
    max-width: 72.375rem;
    margin-inline: auto;
    padding-inline: 1.5rem;
`

const Container = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
        {children}
    </StyledContainer>
  )
}

export default Container
