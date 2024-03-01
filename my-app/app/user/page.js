//'use client'
import { ded } from '../lib/ded';  
import { useParams } from 'next/navigation'
async function user() {
  const data = await ded(username);
  return data;
}

export default function UserPage({ params })  // The name of the function is the name of the file
{
  const {username} = useParams();

 
    return (
        <div>
            <h1>User Page</h1>
        <p>Welcome to the user page of our website</p>
  
        <suspense>
          <ded/>
          </suspense>
        </div>
    );
} 