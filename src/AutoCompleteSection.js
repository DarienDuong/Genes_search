import React from 'react'
import { render } from 'react-dom'
import './AutoCompleteSection.css'
import AutoGene from './AutoGene'

function renderResults(autocomplete) {
    if (autocomplete !== '') {
        return autocomplete.slice(0, 5).map((gene) => <AutoGene gene={gene.gene} />)
    } else {
        return ''
    }
}

const AutoCompleteSection = ({ autocomplete }) => {

    return (
        <div className='autocomplete-container'>{renderResults(autocomplete)}</div>
    )
}

export default AutoCompleteSection