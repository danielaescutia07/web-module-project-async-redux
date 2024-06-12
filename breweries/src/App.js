import React, { useEffect } from 'react';
import BrewsList from './components/BrewsList';
import { connect } from 'react-redux';

import { getBrews } from './actions';

import './App.css';


function App(props) {
  
  const { error, isFetching, getBrews } = props;

  useEffect(() => {
    getBrews();
  }, [getBrews]);

  return (
    <div className='App'>
      <h1>Breweries</h1>
      { (error !== "") && <h3>{error}</h3> }

      { isFetching ? <h3>Please wait...</h3> : <BrewsList />}
    </div>

  );
}

const mapStateToProps = state => {
  return {
      isFetching: state.isFetching,
      error: state.error
  };
};

export default connect(mapStateToProps, {getBrews})(App);
