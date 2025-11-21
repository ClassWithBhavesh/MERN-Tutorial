import "./App.css";
import Anmol from "./Components/Anmol";
// import YeHaiFuncCompo from "./Components/FuncCompo";
// import ClassCompo from "./Components/ClassCompo";

function App() {

  const personData = [
    {
      perId: 1,
      perName: "Anmol Tiwari",
      perAge: 19,
      perSalary: 0,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Kajal Tiwari",
      perAge: 39,
      perSalary: 1000000,
      perGender: "Female"
    },
    {
      perId: 1,
      perName: "Rahul Dongre",
      perAge: 75,
      perSalary: 0,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Kshitij Dev",
      perAge: 26,
      perSalary: 14500,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Sherya Gautam",
      perAge: 56,
      perSalary: 25000,
      perGender: "Female"
    },{
      perId: 1,
      perName: "Anmol Tiwari",
      perAge: 19,
      perSalary: 0,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Kajal Tiwari",
      perAge: 39,
      perSalary: 1000000,
      perGender: "Female"
    },
    {
      perId: 1,
      perName: "Rahul Dongre",
      perAge: 75,
      perSalary: 0,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Kshitij Dev",
      perAge: 26,
      perSalary: 14500,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Sherya Gautam",
      perAge: 56,
      perSalary: 25000,
      perGender: "Female"
    },{
      perId: 1,
      perName: "Anmol Tiwari",
      perAge: 19,
      perSalary: 0,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Kajal Tiwari",
      perAge: 39,
      perSalary: 1000000,
      perGender: "Female"
    },
    {
      perId: 1,
      perName: "Rahul Dongre",
      perAge: 75,
      perSalary: 0,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Kshitij Dev",
      perAge: 26,
      perSalary: 14500,
      perGender: "Male"
    },
    {
      perId: 1,
      perName: "Sherya Gautam",
      perAge: 56,
      perSalary: 25000,
      perGender: "Female"
    }
  ];
  console.log(personData);

  return (
    <> 
      {/* <></> this are React Fragments */}
      {/* <div>App Component</div> */}
      {/* <YeHaiFuncCompo />
      <ClassCompo /> */}

      {/* Rendering Child Compo using Props in React JS */}
      {/* <Anmol glasses="professional" jacket="Denim" shoes="RedTape" />
      <Anmol glasses="Casual" jacket="Nike" shoes="Formal" />
      <Anmol glasses="Goggles" jacket="Leather" shoes="Adidas" />
      <Anmol glasses="Sun-Glasses" jacket="H&M" shoes="Adibas" />
      <Anmol glasses="Screen-Protection" jacket="Shivraj" shoes="Adihas" /> */}


      {/* Listing a Single Child Compo dynamically using React Listing Concept */}
      {/* <Anmol /> */}

      {personData.map((perData) => {
        return <Anmol perName={perData.perName} perAge={perData.perAge} perSalary={perData.perSalary} perGen={perData.perGender} key={perData.perId} />
      })}
    </>
  );
}

export default App;
