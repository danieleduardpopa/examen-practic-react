import React, { useEffect } from 'react';
import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { connect } from 'react-redux';
import { setValue } from '../../redux/filtered/FilterActions';

function FilterSideBar(props) {
  
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);

  useEffect(() => {
    if (!checkedThree&&!checkedFour&&!checkedFive) {
      props.setValue('0')
    }
    console.log('effect is running');
  },[checkedFive,checkedFour,checkedThree,props.setValue])

  function handleChangeOne() {
    setCheckedOne(!checkedOne);
    if (checkedTwo) {
      setCheckedTwo(false);
    }
    if (!checkedOne) {
      props.sortName();
    }
  }

  function handleChangeTwo() {
    setCheckedTwo(!checkedTwo);
    if (checkedOne) {
      setCheckedOne(false)
    }
    if (!checkedTwo) {
      props.sortSalary();
    }
  }

  function handleChangeThree() {
    if (!checkedThree) {
      setCheckedThree(true);
      setCheckedFour(false);
      setCheckedFive(false);
      props.setValue(1);
    } else {
      setCheckedThree(false);
      props.setValue(0);
    }
  }

  function handleChangeFour() {
    if (!checkedFour) {
      setCheckedFour(true);
      setCheckedThree(false);
      setCheckedFive(false);
      props.setValue(2);
    } else {
      setCheckedFour(false);
      props.setValue(0);
    }
  }
  
  function handleChangeFive() {
    if (!checkedFive) {
      setCheckedFive(true);
      setCheckedThree(false);
      setCheckedFour(false);
      props.setValue(3);
    } else {
      setCheckedFive(false);
      props.setValue(0);
    } 
  }

  return (
    <div >
      <div className='d-flex flex-column'>
        <h4>Sorteaza dupa</h4>
        <Checkbox
        label="Nume"
        value={checkedOne}
        onChange={handleChangeOne}
        /> 
        
        <Checkbox
        label="Pret"
        value={checkedTwo}
        onChange={handleChangeTwo}
        /> 
      </div>
      <div className='mt-3 d-flex flex-column'>
        <h4>Filtreaza dupa pret</h4>
        <Checkbox
        label="<2500"
        value={checkedThree}
        onChange={handleChangeThree}
        />
        <Checkbox
        label="2500-4000"
        value={checkedFour}
        onChange={handleChangeFour}
        />
        <Checkbox
        label=">4000"
        value={checkedFive}
        onChange={handleChangeFive}
        />
      </div>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    setValue: (payload) => dispatch(setValue(payload))
  }
}

export default connect(null, mapDispatchToProps)(FilterSideBar)
