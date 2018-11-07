import React from 'react';
import PropTypes from 'prop-types';
import CenterElement from '../CenterElement';
import SpaceTable from '../SpaceTable';

export default function SubHeaderContainer(props) {
  const {
    children
  } = props;
  return (
    <CenterElement
      colWidth={460}
    >
      {children}
      <SpaceTable height={10} />
    </CenterElement>
  );
}

SubHeaderContainer.propTypes = {
  children: PropTypes.node,
  colWidth: PropTypes.number,
};