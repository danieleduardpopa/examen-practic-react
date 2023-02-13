import React from 'react';
import { Link } from 'react-router-dom';
import PersonAddForm from '../../components/PersonAddForm/PersonAddForm';

function Home() {
  return (
    <div className='container container-min-max-width d-flex flex-column align-items-center'>
      <h2>Formular adaugare persoane in baza de date</h2>
      <PersonAddForm />
      <Link to='/people'>
        <button className='btn btn-outline-dark'>SPRE PAGINA 2</button>
      </Link>
    </div>
  )
}

export default Home;
