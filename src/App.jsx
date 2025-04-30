
import React from 'react'
import DataForm from './DataFrom'
import Dashboard from './Dashboard'
import Status from './Status'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Cattle Health Monitoring System</h1>
        <Status />
        <DataForm />
        <Dashboard />
      </div>
    </>
  )
}

export default App
