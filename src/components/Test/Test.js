import React from 'react';
import classes from './Test.module.scss';
// import PropTypes from 'prop-types';
const {test} = classes;

function Test() {
  return (
    <div className={test}>
      Test component
    </div>
  );
}

Test.defaultProp = {

};
Test.propTypes = {

};
export default Test;