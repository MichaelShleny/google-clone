import React, { useState } from 'react';
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from "../reducer"

//if we dont pass anything on, the prop will assume its false
function Search({ hideButtons = false }) {
    //dispatch allows us to shoot actions to data layers
    const [{}, dispatch] = useStateValue()

    //have to keep track of the variable.state is how to write vars in react
    //by default, we want usestate to be blank '', because we have nothing in input to start
    //whatever we type into the google input bar, it goes straight into the input var
    const [input, setInput] = useState('')

    const navigate = useNavigate();

    //takes an event (e) whenever we have an onClick
    const search = (e) => {
        //when we click this, it will prevent a refresh (only happens in a form)
        e.preventDefault()

        //console.log('hit search',input)

        //whenevr we type in the source code, we are going to dispatch and action
        //the type of that action is going to be type: SET_SEARCH_TERM
        //we have pushed the user to the search page, and put the search term inside the data layer
        //(inside the search component, we can now pull the search term)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            //we track whatever the input is with term. (input is made in useState)
            //
            term:input
        })

        navigate('/search')

    }
    /*KEY NOTES for the input*/
    //the value = {input} takes in the input from state
    // onChange fires off an event, in short {e}
    // arrow function to set the input text setInput to be whatever you typed in (e.target.value)
    //you cant see, but behind the scenes its being capture in the state
    //using setInput to give it an actual value, to store an input essentially
    //and pulling what value i type in the search bar with target.value


    //we made the button type submit, which accepts the value when button is submitted
    //which was possible because we have a <form>. input acts as a form
    return (
        <form className = 'search'>
            <div className = "search__input">
                <SearchIcon className="search__inputIcon" />
                <input value ={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className = "search__buttons">
                    <Button  type = "submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button  variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className = "search__buttons">
                    <Button className = "search__buttonsHidden" type = "submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className = "search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    );
}

export default Search;
