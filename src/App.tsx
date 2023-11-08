import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  return (
    // <>
    //   <div className="body-container">
    //     {typeof userData === 'string' ? (
    //       <h2>
    //         Bonjour <span>{userData}</span>
    //       </h2>
    //     ) : (
    //       <>
    //         {/* <p>{userData.userInfos.firstName}</p> */}
    //         <Header/>
    //         <Outlet />
    //       </>
    //     )}
    //   </div>
    // </>
    <>
      <div className="body-container">
        <Header />
        <Outlet />
      </div>
    </>
  )
}
