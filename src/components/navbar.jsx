import React from "react";

// statless functional componant

const NavBar = (props) => {
  //   console.log("Navbar");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://localhost.com" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

//---------> Object destructuring <-------------------
// const NavBar = ({totalCounters}) => {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   };

// class NavBar extends Component {
//   render() {

//   }
// }

export default NavBar;
