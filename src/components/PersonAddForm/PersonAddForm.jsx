import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addPerson} from '../../redux/persons/PersonsActions';
import InputField from '../InputField/InputField';
import ModalMessage from '../ModalMessage/ModalMessage';


function PersonAddForm(props) {
  const today = new Date().toISOString().slice(0,10);
  const[showModal, setShowModal] = useState(false);
  const inputFields = [
    { labelName: 'Nume', name: 'lastName' },
    { labelName: 'Prenume', name: 'firstName' },
    { labelName: 'Meserie', name: 'jobTitle' },
    { labelName: 'Salariu', name: 'salary' },
    { labelName: 'Data Angajarii', name: 'hiringDate' },
  ];
  const [formState, setFormState] = useState({
    lastName: '',
    firstName: '',
    jobTitle: '',
    salary: '',
    hiringDate: today
  });

  function handleInputChange(ev) {
    setFormState(prevState => {
      return {
        ...prevState,
        [ev.target.name]: ev.target.value
      }
    }) 
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    let error = false;
    Object.values(formState).forEach((el) => {
      if (el === '') {
        error = true;
      }
    });
    if (!Number(formState.salary)) { 
      error = true;
    }
    if (error) {
      setShowModal(true);
    } else {
      props.addPerson(formState);
    }
    console.log('formState:', formState);
  }

  return (
    <>
      <form 
        className='border rounded p-2 my-4'
        onSubmit={handleOnSubmit}
      >
        <div className='row' >
          {
            inputFields.map(({labelName, name}, index) => {
              return (
                  <InputField
                    key={index}
                    labelName={labelName}
                    inputProps={{
                      value: formState[name],
                      name: [name],
                      onChange: handleInputChange
                    }}
                  />  
              )
            })
          }
        </div>
        <button type='submit' className='btn btn-primary btn-lg w-100 mt-2'>
          Submit
        </button>
      </form>
          {console.log(showModal)}
        {
          showModal 
            && <ModalMessage 
                  handleClose={() => setShowModal(false)} 
                  handleShow={showModal}
                />
        }
      </>  
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addPerson: (payload) => dispatch(addPerson(payload))
  }
}

export default connect(null, mapDispatchToProps)(PersonAddForm);
