import React from 'react'
import './Checkbox.css'

const CheckBox = () => (
    <div className="container">
        <div id="inlineRadio">
        <h2>Nombre de citations</h2>
        <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="1" defaultChecked />1
        </label>
        <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="2" required />2
        </label>
        <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="3" required />3
        </label>
        <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="4" required />4
        </label>
        <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="5" required />5
        </label>
    </div>
  </div>
)

export default CheckBox