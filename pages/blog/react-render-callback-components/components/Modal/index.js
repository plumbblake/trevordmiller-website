import React from 'react'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'

const Modal = ({ teaser, details }) => (
  <Toggle>
    {(isOpen, handleToggleClick) => (
      <button onClick={handleToggleClick}>
        {teaser}
        {isOpen && (
          <div>
            <div
              style={{
                color: '#fff',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
              }}
            >
              {details}
            </div>
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.9)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
              }}
            />
          </div>
        )}
      </button>
    )}
  </Toggle>
)

Modal.propTypes = {
  teaser: PropTypes.string.isRequired,
  details: PropTypes.node.isRequired,
}

export default Modal
