import React, { Component } from 'react'
import { render } from 'react-dom'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        console.log(this.state.search)
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder='Search for gene' name='search' value={this.state.search} />
                <input type="submit" value="Search" />
            </form>
        )
    }
}

export default Form