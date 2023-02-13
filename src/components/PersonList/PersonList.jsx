import React from 'react';
import PersonItem from '../PersonItem/PersonItem';
import { connect } from 'react-redux';

function PersonList(props) {
    const {sortedPersons} = props;
    console.log(sortedPersons);
    
    return (
        <div className='container col-7'>
            {
                (sortedPersons.length > 0)
                    ? sortedPersons.map((person, index) => {
                        return (
                            <div key={index}>
                                <PersonItem id={index+1} key={index} person={{...person}} />
                            </div>
                        )
                     })
                    : (
                        <div className='container' >
                        <h3>NU EXISTA PERSOANE</h3>
                        </div>
                    )  
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        personsList: state.persons.persons
    }
}


export default connect(mapStateToProps)(PersonList);
