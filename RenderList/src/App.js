import "./App.css";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const listItems =desserts.map(item => { 
  const itemText=`${item.name}-${item.calories}`
  if(item.calories<500)
  return <li>{itemText}</li>
})
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
