import React, { Component } from 'react'
import { render } from 'react-dom'
import Form from './Form'
import * as TrieSearch from 'trie-search'
import axios from 'axios'

const ts = new TrieSearch('gene')

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genes: ''
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api')
            .then((response) => {
                ts.addAll(response.data.genes)
                this.setState({ genes: ts })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>In the home</p>
                <Form autoComplete={this.state.genes} />
            </div>
        )
    }
}

export default Home