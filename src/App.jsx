import { puppyList } from './data.js'
import {useState} from 'react'
import './App.css'



function App() {
  const [featPupId, setFeatPupId] = useState(null)
  const [puppies, setPuppies] = useState(puppyList)
console.log("puppyList: ", puppyList);
const featuredPup = puppies.find((pup)=>pup.id === featPupId)
console.log(featuredPup)
  return (
    <>
   
      <div className='pupList'>
       {
        puppies.map((puppy) => {
        return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
       }

{featPupId && (
        <div className='singlePup'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}


      </div>
    
    </>
  )
}

export default App
