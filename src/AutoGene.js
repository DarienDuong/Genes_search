import React from 'react'
import styled from 'styled-components'
import './AutoGene.css'

const StyledP = styled.p`
    text-align: center;
    font-size: 12px;
`

const AutoGene = ({ gene }) => {
    return (
        <div className='auto-gene-box'>
            <StyledP>{gene}</StyledP>
        </div>
    )
}

export default AutoGene