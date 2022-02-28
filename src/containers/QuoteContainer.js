import Quote from "../components/Quote";
import { useState, useEffect } from 'react';

const QuoteContainer = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        getQuotes();
      }, [])

    const getQuotes = () => {
        fetch("https://programming-quotes-api.herokuapp.com/quotes")
            .then(results => results.json())
            .then(data => setQuotes(data))
    }

    return (
        <>
            <Quote quotes={quotes} />
        </>
    )
}

export default QuoteContainer;