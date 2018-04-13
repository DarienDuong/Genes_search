import React, { Component } from 'react'
import { render } from 'react-dom'

class Gene extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gene: []
        }
    }

    render() {
        var gene = this.props.match.params.name
        return (<p>{gene}</p>)
    }
}

export default Gene