import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddFolder.css'
import NotefulContext from '../NotefulContext'

export default class AddFolder extends Component {

    static contextType = NotefulContext
    render() {
        return (
            <section className='AddFolder'>
                <h2>Create a folder</h2>
                <NotefulForm type="folders">
                    <div className='field'>
                        <label htmlFor='folderNameUserInput'>
                            Name
            </label>
                        <input required type='text' id='folderNameUserInput' name='folderNameUserInput' value={this.context.folderName} onChange={this.context.handleFormChange} />
                    </div>
                    <div className='buttons'>
                        <button disabled={this.context.folderName[0] === " "} type='submit'>
                            Add folder
            </button>
                    </div>
                </NotefulForm>
            </section>
        )
    }
}