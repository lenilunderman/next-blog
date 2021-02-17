// import from react to use effect...
import { useEffect } from 'react'
// import from next to deal with the re-direct
import { useRouter } from 'next/router'

const NotFound = () => {
    // initialize the router
    const router = useRouter()

    // This will fire the function only one time
    console.log('Fire the function once');
    useEffect( () => {
        // setTimeout
        setTimeout(()=>{
           // the go, let you go back in history, like the back and forth of the browser 
           //router.go() 
           router.push('/')
        },2000)

    },[])


    return ( 
        <div className="not-found"> 
            <h2>Nothing was found  </h2>
        <p> Ops... nothing here</p>
        </div>
     );
}
 
export default NotFound;