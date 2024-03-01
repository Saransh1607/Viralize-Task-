import { Ded } from '../../lib/ded';
import UserProfile from './userprofile' 
import { useParams } from 'next/navigation'
import classes from './page.module.css'
async function user(params) {
  const data = await Ded(params.username);
  return data;
}
export default  async function UserPage1({ params })  // The name of the function is the name of the file
{
  console.log('params', params)
  const data = await user(params)
 console.log('data', data)
 
    return (
        <div>
            <h1>User Page</h1>
        <p>Welcome to the user page of our website</p>

        <UserProfile data={data} className={classes.UserProfile} />
        
        <div className={classes.UserProfile}></div>

        
  
        
      
        </div>
    );
} 