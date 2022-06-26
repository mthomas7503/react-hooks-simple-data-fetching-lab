import React, { useEffect, useState } from "react"

function App() {
    const [photo, setPhoto] = useState("")
    const [status, setStatus] = useState(false)

    useEffect(() => fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((response)=> {setPhoto(response.message);
    setStatus(response.status)}), [])

    if(!status) {return (
        <div>
            <p>Loading...</p>
        </div>
    )}

    return (
    <div id="root">
        <img alt="A Random Dog" src={photo} />
    </div>
    )
}


export default App