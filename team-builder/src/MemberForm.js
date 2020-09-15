import React, { useState } from 'react'
import styled from 'styled-components'



const CreateForm = styled.form `

   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: center;
   margin: 4% 2%;

`
const EachInput = styled.section `

   display: flex;
   justify-content: center;
   width: 50%;

`


const MemberForm = ({addTeam}) => {


   const [member, setMember] = useState({
      id: Date.now(),
      birth: '',
      name: '',
      role: '',
      email: ''
   })

   const onChangeHandler = event => {
      setMember({
         ...member,
         [event.target.name]: event.target.value
      })
   }

   console.log(member.name, member.birth, member.role, member.email)

   return (

      /*The form has default behavior of refreshing when submit, 
      which need a 'onSubmit' attribute and 'event.preventDefault()' to stop the refresh or reload the page. */
      <CreateForm 
         style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
         onSubmit={ event => {
            event.preventDefault();
            addTeam(member)
            setMember({ // <-- this change the 'member' into empty object when we press 'Enter' key.
               ...member,
               name: '',
               birth: '',
               role: '',
               email: '',
            })
         }}
      >
         <EachInput>
            <label 
               htmlFor={member.name} 
               style={{marginRight: '1rem', display: 'flex', alignItems: 'center', width: '15%', textAlign: 'center'}}
            >
               Name :
            </label>
            <input 
               style={{fontSize: '0.9rem',marginTop: '3%', padding: '3% 4%', width: '35%', textAlign: 'center'}}
               id={member.id}
               type='text' 
               name='name' 
               placeholder='Please Enter Your Name' 
               value={member.name}
               onChange={ onChangeHandler } 
               /* when we write a single word in input value section, 
               this 'onChange' attribute will invoke the function 'onChangeHandler' to update 'member' info(state), 
               and the new updated 'member' info will render in <input> section */
            />
         </EachInput>

         <EachInput>
            <label 
               htmlFor={member.birth} 
               style={{marginRight: '1rem', display: 'flex', alignItems: 'center', width: '15%', textAlign: 'center'}}
            >
               Birth :
            </label>
            <input 
               style={{fontSize: '0.9rem',marginTop: '3%', padding: '3% 4%', width: '35%', textAlign: 'center'}}
               id={member.id}
               type='text' 
               name='birth' 
               placeholder='Please Enter Your Birth' 
               value={member.birth}
               onChange={ onChangeHandler } 
               /* when we write a single word in input value section, 
               this 'onChange' attribute will invoke the function 'onChangeHandler' to update 'member' info(state), 
               and the new updated 'member' info will render in <input> section */
            />
         </EachInput>

         <EachInput>
            <label 
               htmlFor={member.name} 
               style={{marginRight: '1rem', display: 'flex', alignItems: 'center', width: '15%', textAlign: 'center'}}
            >
               Role :
            </label>
            <input 
               style={{fontSize: '0.9rem',marginTop: '3%', padding: '3% 4%', width: '35%', textAlign: 'center'}}
               id={member.id}
               type='text' 
               name='role' 
               placeholder='Please Enter Your Role' 
               value={member.role}
               onChange={ onChangeHandler } 
               /* when we write a single word in input value section, 
               this 'onChange' attribute will invoke the function 'onChangeHandler' to update 'member' info(state), 
               and the new updated 'member' info will render in <input> section */
            />
         </EachInput>

         <EachInput>
            <label 
               htmlFor={member.name} 
               style={{marginRight: '1rem', display: 'flex', alignItems: 'center', width: '15%', textAlign: 'center'}}
            >
               Email :
            </label>
            <input 
               style={{fontSize: '0.9rem',marginTop: '3%', padding: '3% 4%', width: '35%', textAlign: 'center'}}
               id={member.id}
               type='text' 
               name='email' 
               placeholder='Please Enter Your Email' 
               value={member.email}
               onChange={ onChangeHandler } 
               /* when we write a single word in input value section, 
               this 'onChange' attribute will invoke the function 'onChangeHandler' to update 'member' info(state), 
               and the new updated 'member' info will render in <input> section */
            />
         </EachInput>

         <button style={{marginTop: '2rem', padding: '1% 3%'}} type='submit'>Add To List</button>
      </CreateForm>

   )

}

export default MemberForm