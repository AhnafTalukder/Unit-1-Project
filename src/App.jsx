
import './App.css'
import './components/Card'
import Card from './components/Card'

//importing images
import Ahnaf_profile from './assets/Ahnaf.jpeg'
import Ahnaf_background from './assets/AhnafBackground.jpeg';

import Anushil_profile from './assets/anushil.jpeg'
import Anushil_background from './assets/AnushilBackground.jpeg'

import James_profile from './assets/James.jpeg'
import James_background from './assets/JamesBackground.jpeg'

import p1 from './assets/profile1.jpg'
import p2 from './assets/profile2.jpeg'
import p3 from './assets/profile3.jpg'
import p4 from './assets/profile4.jpg'
import p5 from './assets/profile5.jpg'
import p6 from './assets/profile6.jpg'
import p7 from './assets/profile7.jpg'



function App() {


  return (

   
    <div>
      
      <div id="title"> <h2>Share your Instagram with friends</h2> </div>
      <div className="card-container">
      <Card backgroundImage={Ahnaf_background} profile_picture={Ahnaf_profile} name="Ahnaf Talukder" pronoun="He/Him" vibe="fun, gym, CS, books" goal='"Connect with me if you want to do leetcode for 10 hours straight."' />
      <Card backgroundImage={Anushil_background} profile_picture={Anushil_profile} name="Anushil Adhikari" pronoun="He/Him" vibe="fun, gym, CS, books" goal='"Very fun to hang out with."'/>
      <Card backgroundImage={James_background} profile_picture={James_profile} name="James Ngyuen" pronoun="He/Him" vibe="fun, gym, CS, books" goal='"Looking for fun activities to do with people."'/>
   
      
    </div>
    </div>
    
    
  )
}

export default App
