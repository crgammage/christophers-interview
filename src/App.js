import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ContractCard from './ContractCard.js'
const CONTRACTS = {
  contracts: [
    {
      contractName: 'Boats',
      systemName: 'BoatSystem',
      fields: [
        {
          name: 'boatOwner',
          ID: 'BO',
          businessEntity: 'Boats',
          definition: 'Owner of the boat'
        },
        {
          name: 'boatRegion',
          ID: 'BR',
          businessEntity: 'Boats',
          definition: 'Region of the boat'
        },
        {
          name: 'boatDockingPriveleges',
          ID: 'BDP',
          businessEntity: 'Boats',
          definition: 'Places a boat can dock'
        },
        {
          name: 'dockIDs',
          ID: 'DID',
          businessEntity: 'Boats',
          definition: 'Docks that the boat can dock in'
        }
        ]
    },
    {
      contractName: 'WikiPages',
      systemName: 'WikiPageSystem',
      fields: [
        {
          name: 'pageOwner',
          ID: 'PO',
          businessEntity: 'WikiPages',
          definition: 'Owner of the wikipage'
        },
        {
          name: 'wikiURL',
          ID: 'wURL',
          businessEntity: 'WikiPages',
          definition: 'URL of the wikipage'
        },
        {
          name: 'wikiAccessOwners',
          ID: 'WAO',
          businessEntity: 'WikiPages',
          definition: 'Description of who can access this page'
        }
        ]
    }
  ]
}

let contracts = CONTRACTS
  let firstContract = contracts.contracts[0]
  let secondContract = contracts.contracts[1]

const renderFirstContracts = () => {
  return (firstContract.fields.map((field) => (
    <>
    <ContractCard key={field.ID} {...field} />
    </>
  )))
}

const renderSecondContracts = () => {
  return (secondContract.fields.map((field) => (
    <>
    <ContractCard key={field.ID} {...field} />
    </>
  )))
}

const App = () => {
  return (
    <>
    <div className="contract-one">
      <h1>Contract Name: {firstContract.contractName}</h1>
      <h2>System Name: {firstContract.systemName}</h2>
      <h2>Fields:</h2>
      {renderFirstContracts()}
    </div>
    <div className="contract-two">
    <h1>Contract Name: {secondContract.contractName}</h1>
      <h2>System Name: {secondContract.systemName}</h2>
      <h2>Fields:</h2>
        {renderSecondContracts()}
    </div>
    </>
  )
}

export default App;
