// a function that run in built time and return all values for a component 
export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    // create an const to formulate the array for one obj
    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })
    // for dynamic data is necessary to use getStaticPaths
    return {
        paths,
        fallback: false
    }
   
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: { user: data }
    }
}

const UserDetailS = ({user}) => {
    return ( 
        <div>
            <h1>Details Page</h1>
            <p> {user.name}</p>
            <p> {user.email}</p>
            <p> {user.website}</p>
        </div>
     );
}
 
export default UserDetailS;