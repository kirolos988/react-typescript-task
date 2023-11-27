import React, { useState } from 'react';
import './App.css';
import NavBar from "./navBar/NavBar";
import Ticket from './ticket/Ticket'
import MidNavBar from './midNavBar/MidNavBar';
import Table from './Table/Table'
// import BarChart from './chart/BarChart';
// import {UserData} from './chart/Data'

function App() {
  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.month),
  //   datasets: [{
  //     label: "Users No.",
  //     data: UserData.map((data) => data.users)
  //   }],
  // })
  return (
    <div className="App">
      <div><NavBar /></div>
      {/* <BarChart chartData={userData} /> */}
      <div><Ticket /></div>
      <div><MidNavBar /></div>
      <div><Table /></div>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import NavBar from './navBar/NavBar';
// import BarChart from './chart/BarChart';
// import { UserData } from './chart/Data';

// function App() {
//   const [userData, setUserData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Users No.',
//         data: [],
//       },
//     ],
//   });

//   useEffect(() => {
//     // Transform data here if needed
//     const labels = UserData.map((data) => data.month);
//     const data = UserData.map((data) => data.users);

//     setUserData({
//       labels,
//       datasets: [
//         {
//           label: 'Users No.',
//           data,
//         },
//       ],
//     });
//   }, []); // Empty dependency array to run the effect only once after mount

//   return (
//     <div className="App">
//       <NavBar />
//       <BarChart chartData={userData} />
//     </div>
//   );
// }

// export default App;
