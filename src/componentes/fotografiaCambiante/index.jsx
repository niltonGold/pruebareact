import { useEffect, useState } from "react";

let urlImg = 'https://picsum.photos/200';

export default function FotografiaCambiante(){

    
    const[ fotoState, setFotoState ] = useState(urlImg);

    useEffect(() => {
        setInterval(() => setFotoState( window.location.reload() ), 3000);
    }, []);

    return(
        <>
            {/* <h1>foto</h1> */}
            <img src={fotoState} width="200" height="200"></img>
        </>
    )
    
}