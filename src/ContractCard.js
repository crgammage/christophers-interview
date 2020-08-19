import React, { Fragment } from 'react'

const ContractCard = props => {
    console.log(props)
    
    return (
        <>
        <h3>Field Name: {props.name}</h3>
        <h3>Field ID: {props.ID}</h3>
        <h3>Field Entity: {props.businessEntity}</h3>
        <h3>Field Definition: {props.definition}</h3>
        </>
    )
}

export default ContractCard