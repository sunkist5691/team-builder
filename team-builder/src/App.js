import React, {useState} from 'react';
import MemberForm from './MemberForm'
import TeamList from './TeamList'
import './App.css';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Joshua',
      birth: '1984/10/15',
      role: 'Senior software enginner',
      email: 'galaxy7734@gmail.com'
    }
  ])

  console.log(team)

  const addTeam = (teamInfo) => {
    setTeam([...team, teamInfo]) // Get a new updated member info from MemberForm, and add into 'team' array using 'spread operator' (this is why spread operator is AWESOME!)
  }

  return (
    <>
      <MemberForm addTeam={addTeam}/> 
      {/* pass down the 'addTeam' function to 'MemberForm' in order to add and update into 'team' array by 'member' object */}

      <TeamList team={team}/> 
      {/* Once the 'team' array get additional object from 'MemberForm', 
      then it will render in 'TeamList' by passing down the new updated 'team' array */}
    </>
  )
}

export default App;
