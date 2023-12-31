import { useContext } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../contexts/github/GithubContext'

function UserResults() {

const { loading, users } = useContext(GithubContext)

    if(!loading) {
            return (
            <div className='grid grid-cols-1 gaps-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user)=>(
                        <UserItem key={user.id} user={user} />
                ))}
            </div>
            )
            }
    else {
    return <Spinner />
 } 

}

export default UserResults