import React from 'react'

function PersonItem(props) {
    const {person} = props;
    return (
        <div className='container d-flex border rounded mb-2'>
            <div>
                <h4>{props.id}.</h4>
            </div>
            <div>
                <h4>NUME: {person.lastName} </h4>
                <h4>PRENUME: {person.firstName} </h4>
                <p>MESERIE: {person.jobTitle}</p>
                <p>SALARIU: {person.salary}</p>
                <p>DATA ANGAJARII: {person.hiringDate}</p>
            </div>
        </div>
    )
}

export default PersonItem
