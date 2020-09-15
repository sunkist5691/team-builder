import React from 'react'
import styled from 'styled-components'

const Container = styled.section `

   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;

`

const Info = styled.div `

   border: solid 2px grey;
   display: flex;
   flex-flow: column wrap;
   align-items: center;
   justify-content: center;
   width: 26%;
   margin: 2%;

`

const TeamList = ({team}) => {


   return (

      <Container>
         {
            team.map( (eachMember) => {
               return (
                  <Info key={eachMember.id}>
                     <h3>{eachMember.name}</h3>
                     <p>{eachMember.birth}</p>
                     <p>{eachMember.role}</p>
                     <p>{eachMember.email}</p>
                  </Info>
               )
            })
         }
      </Container>

   )

}

export default TeamList