import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Table from './Table'

class Gene extends Component {
    constructor(props) {
        super(props)
        this.state = {
            variants: []
        }
    }

    componentDidMount() {
        var url = `/api/${this.props.match.params.name}`
        axios.get(url)
            .then((response) => {
                this.setState({ variants: response.data.variants })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Table variants={this.state.variants} />
            </div>
        )
    }
}

export default Gene