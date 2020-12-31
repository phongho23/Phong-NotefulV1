import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddNote.css';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types'

class AddNote extends Component {
    static defaultProps = {
        folders: [],
    }
    render() {

        const { folders } = this.props
        return (
            <NotefulContext.Consumer type='notes'>
                {(prop) => {

                    return (
                        <section className='AddNote'>
                            <h2>Create a note</h2>
                            <NotefulForm>
                                <div className='field'>
                                    <label htmlFor='noteNameUserInput'>
                                        Name
                </label>
                                    <input required type='text' id='noteNameUserInput' name='noteNameUserInput' value={prop.noteNameUserInput} onChange={prop.handleFormChange} />
                                </div>
                                <div className='field'>
                                    <label htmlFor='noteTextUserInput'>
                                        Content
                </label>
                                    <textarea required id='noteTextUserInput' name='noteTextUserInput' value={prop.noteTextUserInput} onChange={prop.handleFormChange} />
                                </div>
                                <div className='field'>
                                    <label htmlFor='noteFolderUserSelect'>
                                        Folder
                </label>
                                    <select required id='noteFolderUserSelect' name='noteFolderUserSelect' value={prop.noteFolderUserSelect} onChange={prop.handleFormChange} >
                                        <option value="">...</option>
                                        {folders.map(folder =>
                                            <option key={folder.id} value={folder.id}>
                                                {folder.name}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className='buttons'>
                                    <button disabled={prop.noteNameUserInput === ""}

                                        type='submit'>
                                        Add note
                </button>
                                </div>
                            </NotefulForm>
                        </section>


                    )

                }}
            </NotefulContext.Consumer>

        )
    }
}

AddNote.propTypes = {
    folder: PropTypes.array.isRequired
}

export default AddNote