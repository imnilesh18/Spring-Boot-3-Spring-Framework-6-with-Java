import './TodoApp.css'
import { useState } from 'react'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  )
}

function LoginComponent() {

  const[username, setUsername] = useState('in28minutes')

  const[password, setPassword] = useState('')

  const[showSuccessMessage, setShowSuccessMessage] = useState(false)

  const[showErrorMessage, setErrorSuccessMessage] = useState(false)

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
     setPassword(event.target.value)
  }

  function handleSubmit() {
    if(username==='in28minutes' && password==='dummy') {
      console.log('Success')
      setShowSuccessMessage(true)
      setErrorSuccessMessage(false)
    } else {
      console.log('Failed')
      setShowSuccessMessage(false)
      setErrorSuccessMessage(true)
    }
  }

  function SuccessMessageComponent() {
    if(showSuccessMessage) {
      return <div className="successMessage">Authenticated Successfully</div>
    }
    return null
  }

  function ErrorMessageComponent() {
    if(showErrorMessage) {
      return <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>
    }
    return null
  }

  return (
    <div className="Login">
      
      <SuccessMessageComponent />
      <ErrorMessageComponent />

      <div className="LoginForm">
    
        <div>
          <label>User name</label>
          <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div>
          <button type="button" name="login" onClick={handleSubmit}>login</button>
        </div>

      </div>
    </div>
  )
}

function WelcomeComponent() {
  return (
    <div className="Welcome">
      Welcome Component
    </div>
  )
}