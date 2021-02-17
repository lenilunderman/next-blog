import styles from '../../styles/Ninja.module.css'
import Head from 'next/head'
import Link from 'next/link'
// function provided by next to fetch data before displaying on the screen
export const getStaticProps = async () => {
    // create the fetch request
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    // return an obj
    return {
        props: {users:data}
    }
}

// destroctor with the same name you gave to the props
const BlogIndex = ( {users } ) => {
    console.log(users);
    return ( 
        <>
        <Head>
            <title> About </title>
        </Head>
        <div>
            <h1>All users</h1>
            {users.map(user => (
                <Link href={'/blogs/' + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3> {user.name }</h3>
                    </a>
                </Link>
            ))}
            
        </div>
        </>
     );
}
 
export default BlogIndex;