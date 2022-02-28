import './Quote.scss';
import { useState, useEffect } from "react";

const Quote = ({quotes}) => {



    const [randomNumber, setRandomNumber] = useState(0);

    const getQuote = quotes[randomNumber];

    let timerLength = getQuote ? (getQuote.en.length / 15) * 1000 : 5000;

    if (timerLength < 4000) timerLength = 4000;

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 501);
        setRandomNumber(randomNumber);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleClick();
         }, timerLength)
         return () => {
            clearTimeout(timer)
          }
       });

    useEffect(()=>{
        handleClick()
    },[])

    const button = document.querySelectorAll(".button");
       let last = 1500;
       let changeSpeed = 2000;
       let rAF;
       
    function render(now) {
        if (!last || now - last >= changeSpeed) {
           last = now;
           button.forEach(button => {
             button.style.borderTopLeftRadius = `${random()}px ${random()}px`;
             button.style.borderTopRightRadius = `${random()}px ${random()}px`;
             button.style.borderBottomLeftRadius = `${random()}px ${random()}px`;
             button.style.borderBottomRightRadius = `${random()}px ${random()}px`;
           });
        }
        rAF = requestAnimationFrame(render);
       }
       
    const random = () => {
        return Math.floor((Math.random() * 1000000));
       };
       
    render(last);

    return (
        <>
        {getQuote ? <button onClick={handleClick} className="button"><p>{getQuote.en}</p><h4>{getQuote.author}</h4></button> : null}
        </>
    );
}

export default Quote;