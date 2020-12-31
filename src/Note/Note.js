import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

export default class Note extends Component {

  render() {
    return (
      <ErrorBoundary>
        <div className='Note'>
          <h2 className='Note__title'>
            <Link to={`/note/${this.props.id}`}>
              {this.props.name}
            </Link>
          </h2>

          <NotefulContext.Consumer >
            {(context) => (
              <button className='Note__delete' type='button' onClick={() => { context.deleteNote(this.props.id); if (this.props.onDelete) { this.props.onDelete(); }; }} >
                <FontAwesomeIcon icon='trash-alt' />
                {' '}
            remove
              </button>
            )}
          </NotefulContext.Consumer>

          <div className='Note__dates'>
            <div className='Note__dates-modified'>
              Modified
            {' '}
              <span className='Date'>
                {format(this.props.modified, 'Do MMM YYYY')}
              </span>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}


Note.propTypes = {
  name: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  modified: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),  
};