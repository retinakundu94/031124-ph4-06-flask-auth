import Signup from './Signup'
import Login from './Login'
import UserDetails from "./UserDetails"

function UserPanel({currentUser, setCurrentUser}) {

  // RENDER //

  if (!currentUser) { // render Signup and Login if no currentUser

    return (
        
        <div className="flex-row">

          <Signup />

          <Login />

        </div>
    
    )

    } else { // render UserDetails if currentUser
      
      return (
        <UserDetails currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )

    }

}

export default UserPanel
