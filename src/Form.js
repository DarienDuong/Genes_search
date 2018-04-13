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
        this.setState({ search: e.target.value }, () => {
            this.props.autoCompleteResults(this.props.autoCompleteList.get(this.state.search))
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder='Search for gene' name='search' value={this.state.search} />
                <input type="submit" value="Search" />
            </form>
        )
    }
}

export default Form