import React from 'react';
import { connect } from 'react-redux';
import { changeStep } from '../redux/counterActions';

const StepSelector = ({ step, changeStep }) => (
  <div>
    <h2>Current step: {step}</h2>
    <select value={step} onChange={e => changeStep(Number(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  step: state.step,
});

const mapDispatchToProps = { changeStep };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelector);
