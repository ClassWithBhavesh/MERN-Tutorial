// const Anmol = ({glasses: Glass, jacket: Jack, shoes: Joote}) => {
//     console.log(Glass);
//     console.log(Jack);
//     console.log(Joote);
//     return (
//         <section>
//             {/* <p>Chashma - {props.glasses}</p>
//             <p>Jacket - {props.jacket}</p>
//             <p>Shoe - {props.shoes}</p> */}
//             <p>Chashma - {Glass}</p>
//             <p>Jacket - {Jack}</p>
//             <p>Shoe - {Joote}</p>
//         </section>
//     )
// }

// export default Anmol

// What are props?
// are the properties of each and every components through which we can
// reuse our single component for multiple times for the dynamic data

import React from "react";

function Anmol({ perName, perAge, perSalary, perGen }) {
  return (
    <>
      <div>
        User Name : {perName}, User Age : {perAge}, User Salary : {perSalary},
        User Gender : {perGen}
      </div>
      <br />
    </>
  );
}

export default Anmol;
