import React from 'react'
import './Select.css'

const Select = () => (
    <div className="container">
        <div>
        <h2>Choisissez un auteur</h2>
            <select id="autorSelect" className="custom-select">
                <option value="perceval">Perceval, chevalier de la table ronde</option>
                <option value="karadoc">Karadoc, chevalier de la table ronde</option>
            </select>
        </div>
    </div>
)

export default Select