import { Ded } from '../../lib/ded';
import { useParams } from 'next/navigation'
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
  
        
      
        </div>
    );
} 