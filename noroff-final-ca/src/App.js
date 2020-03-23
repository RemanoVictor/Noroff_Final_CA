import React from "react";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import Nav from "./components/nav";

export default function App(props) {
  return (
    <div className="App">
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>
      <div className="[ container-fluid ]">{props.children}</div>
    </div>
  );
}

// import React, { Component } from "react";

// import "bootstrap3/dist/css/bootstrap.min.css";
// import "./scss/styles.scss";

// import Nav from "./components/nav";
// import Login from "./pages/Login";

// export default class App extends Component {
//   state = {
//     isloggedIn: true
//   };

//   updateLogin = () => {
//     this.setState({
//       isLoggedIn: true
//     });
//   };

//   logOut = () => {
//     this.setState({
//       isloggedIn: false
//     });
//     sessionStorage.clear();
//   };

//   render() {
//     return sessionStorage.getItem("username") === "cameron" &&
//       sessionStorage.getItem("password") === "chikipowpow!" ? (
//       <div className="App">
//         <div className="[ container-fluid ]">
//           <div className="[ row ] [ navigation ]">
//             <div className="[ col-sm-10 ]">
//               <Nav />
//             </div>
//             <div className="[ col-sm-2 ]">
//               <button onClick={this.logOut} className="btn btn-default">
//                 LogOut
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="[ container-fluid ]">{props.children}</div>
//       </div>
//     ) : (
//       <>
//         <Login updateLoginStatus={this.updateLogin} />
//       </>
//     );
//   }
// }