import React from 'react'
import { render } from 'react-dom'

function renderResults(autocomplete) {
    if (autocomplete !== '') {
        return autocomplete.map((gene) => <p>{gene.gene}</p>)
    } else {
        return ''
    }
}

const AutoCompleteSection = ({ autocomplete }) => {

    return (
        <div>{renderResults(autocomplete)}</div>
    )
}

export default AutoCompleteSection