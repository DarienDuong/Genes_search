import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    margin-top: 0px;
`

const StyledP = styled.p`
    text-align: center;
`

const AutoGene = ({ gene }) => {
    return (
        <StyledDiv>
            <StyledP>{gene}</StyledP>
        </StyledDiv>
    )
}

export default AutoGene