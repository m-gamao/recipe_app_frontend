import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

export default class SearchContainer extends Component {
    render() {
        return (
            <>
                <SearchForm />
                <SearchResults />
            </>
        )
    }
}
