import styled from "styled-components"

const StyledContainer = styled.div`
    max-width: 69.375rem;
    margin-inline: auto;
`

const Container = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
        {children}
    </StyledContainer>
  )
}

export default Container
