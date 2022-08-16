import { useState, useEffect } from 'react'
import { API_KEY } from "./keys"

const CONTEXT_KEY = "44875b817ae0543b4"

//1. pass in term inside the useGooglSearch hook
//2. whenever [term] changes (noted in the useEffect, we are going to fireup useEffect)
//3. useEffect will get all the search results using the google api, then gets the search results page
const useGoogleSearch = (term) => {
  //create a custom hook - has its own piece of state called data
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=
            ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        //when we get the response back, go ahead and change the response
        //into json (html) format
        .then(response => response.json())
        //then whatever is the result of the json, we will set the data, to that result
        .then(result => {
            setData(result)
        })
    }
    fetchData()
    //data layer variable
  }, [term])

//returns data as an object
  return { data }
}

export default useGoogleSearch
