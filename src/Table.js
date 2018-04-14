import React from 'react'
import { Link } from 'react-router-dom'
import './Table.css'

const renderVariants = (variants) => {
    return variants.map((variant) => {
        return (
            <tr>
                <td>{variant.gene}</td>
                <td>{variant.nucleotide_change}</td>
                <td>{variant.protein_change}</td>
                <td>{variant.alias}</td>
                <td>{variant.region}</td>
                <td>{variant.reported_classification}</td>
                <td>{variant.last_evaluated}</td>
                <td>{variant.last_updated}</td>
                <td><a href={variant.url}>{variant.source}</a></td>
            </tr>
        )
    })
}

const Table = ({ variants }) => {
    return (
        <table id='table'>
            <thead>
                <tr>
                    <th>GENE</th>
                    <th>NUCLEOTIDE CHANGE</th>
                    <th>PROTEIN CHANGE</th>
                    <th>ALIAS</th>
                    <th>REGION</th>
                    <th>REPORTED CLASSIFICATION</th>
                    <th>LAST EVALUATED</th>
                    <th>LAST UPDATED</th>
                    <th>MORE INFO</th>
                </tr>
            </thead>
            <tbody>
                {renderVariants(variants)}
            </tbody>
        </table>
    )
}

export default Table