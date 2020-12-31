import React from 'react'
import './NotefulForm.css'
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import NotefulContext from '../NotefulContext'
import APInoteful from '../APInoteful';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export default withRouter(function NotefulForm(props) {
  const { className, children, ...otherProps } = props
  async function handleSubmit(event, data) {
    event.preventDefault();

    if (props.type === 'folders') {
      await APInoteful.apiPost({ 
        datum: { name: data.folderName, }, 
        type: props.type 
      })
      await data.updateState();
      props.history.goBack();
    }

    else {
      await APInoteful.apiPost({ 
        datum: { 
          name: data.noteNameUserInput, 
          content: data.noteTextUserInput, 
          folderId: data.noteFolderUserSelect, 
          modified: Date.now(), }, 
          type: 'notes' })
      await data.updateState();
      props.history.push(`/folder/${data.noteFolderUserSelect}`);
    }
    data.clearData();
  }

  NotefulForm.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    children: PropTypes.array,
  };

  return (
    <ErrorBoundary>
      <NotefulContext.Consumer>
        {(data) => {
          return (
          <form
            className={['Noteful-form', className].join(' ')}
            action='#'
            onSubmit={(event) => handleSubmit(event, data)}>
            {data.error ? <div>Field cannot be blank</div> : ''}
            {children}
          </form>
          )
        }}
      </NotefulContext.Consumer>
    </ErrorBoundary>
  )
})