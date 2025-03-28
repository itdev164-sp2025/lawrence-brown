import React, { children } from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const List = ({ children, ...rest }) => (
    <BaseContainer>
      {children}
    </BaseContainer>
)

List.propTypes = {
    children: PropTypes.node.isRequired
}