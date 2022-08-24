import { useEffect, useState } from "react";

export default function HoraActual(){

    const[ dateState, setDateState ] = useState(new Date());

    const[ dia, setDia] = useState()


    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);


    return(
        <>
    <div>
        <div>
            <h1>{dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}</h1>
        </div>

        <div>    
            <h1>{dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second:'numeric',
                hour12: 'true',
            })}</h1>
        </div>    
    </div>        
        </>
    )
}