import React, { Component } from 'react'
import { render } from 'react-dom'
import Form from './Form'
import './Home.css'
import AutoCompleteSection from './AutoCompleteSection'
import * as TrieSearch from 'trie-search'
import axios from 'axios'

const ts = new TrieSearch('gene')

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genes: '',
            autocomplete: ''
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api')
            .then((response) => {
                ts.addAll(response.data.genes)
                this.setState({ genes: ts })
            }).catch(err => console.log(err))
    }

    autoCompleteResults = (result) => {
        this.setState({ autocomplete: result })
    }

    render() {
        return (
            <div>
                <div className='home-container'>
                    <div className='text-container'>
                        <h1>Search for your favorite gene</h1>
                        <p>The number one variant lookup tool in the world</p>
                        <div className='search-container'>
                            <Form autoCompleteList={this.state.genes} autoCompleteResults={this.autoCompleteResults.bind(this)} />
                            <AutoCompleteSection autocomplete={this.state.autocomplete} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home