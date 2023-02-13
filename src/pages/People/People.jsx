import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PersonList from '../../components/PersonList/PersonList';
import FilterSideBar from '../../components/FilterSideBar/FilterSideBar';
import { Link } from 'react-router-dom';

function People(props) {
  const {personsList} = props;
  const [sortedPersons, setSortedPersons] = useState(personsList);
  const [filterArray] = useState(sortedPersons);
  const filteredOne = [...filterArray].filter(el => +el.salary < 2500);
  const filteredTwo = [...filterArray].filter(el => (2500 <= +el.salary) && (+el.salary<= 4000));
  const filteredThree = [...filterArray].filter(el => +el.salary > 4000);
  
  useEffect(() => {
    if (+props.filterValue === 0) {setSortedPersons(personsList)};
    if (+props.filterValue === 1) {setSortedPersons(filteredOne)};
    if (+props.filterValue === 2) {setSortedPersons(filteredTwo)};
    if (+props.filterValue === 3) {setSortedPersons(filteredThree)};
  },[props.filterValue])


  function sortByName() {
    const sortedArray = [...sortedPersons].sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });
    setSortedPersons(sortedArray);
  }
  
  function sortBySalary() {
    const sortedArray = [...sortedPersons].sort((a, b) => {
      if (+a.salary < +b.salary) {
        return -1;
      }
      if (+a.salary > +b.salary) {
        return 1;
      }
      return 0;
    });
    setSortedPersons(sortedArray);
  }

  return (
    <div className='container container-min-max-width'>
      <div className='text-center mb-4'>
        <h2>Lista persoane:</h2>
      </div>
      <div className='d-flex mt-5'>
        <div className='container col-5'>
          <FilterSideBar 
            sortName={sortByName}
            sortSalary={sortBySalary}
          />
          <Link to='/'>
            <button className='btn btn-outline-dark mt-2'>
              PAGINA 1
            </button>
          </Link>
        </div>

        <PersonList 
          sortedPersons={sortedPersons}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
      personsList: state.persons.persons,
      filterValue: state.filter.filter
  }
}

export default connect(mapStateToProps)(People)
