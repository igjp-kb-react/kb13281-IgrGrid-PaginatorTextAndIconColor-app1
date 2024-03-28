import { DisplayDensity, IgrColumn, IgrPaginator, IgrGrid } from "@infragistics/igniteui-react-grids";
import "./app.css";

const sampleData = [
  { id: 1, name: "John", country: "USA", age: 37 },
  { id: 2, name: "Alice", country: "India", age: 32 },
  { id: 3, name: "Bob", country: "Korea", age: 25 },
  { id: 4, name: "Doe", country: "Japan", age: 20 },
  { id: 5, name: "Jane", country: "China", age: 45 },
  { id: 6, name: "Smith", country: "Russia", age: 50 },
  { id: 7, name: "Tom", country: "Germany", age: 55 },
  { id: 8, name: "Jerry", country: "France", age: 60 },
  { id: 9, name: "Marry", country: "Italy", age: 65 },
  { id: 10, name: "Linda", country: "Spain", age: 70 },
  { id: 11, name: "John", country: "USA", age: 37 },
  { id: 12, name: "Alice", country: "India", age: 32 },
  { id: 13, name: "Bob", country: "Korea", age: 25 },
  { id: 14, name: "Doe", country: "Japan", age: 20 },
  { id: 15, name: "Jane", country: "China", age: 45 },
  { id: 16, name: "Smith", country: "Russia", age: 50 },
];

export const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrGrid data={sampleData} primaryKey="id" width="100%" height="300px" displayDensity={DisplayDensity.Cosy}>
        <IgrColumn field="name" header="Name" />
        <IgrColumn field="country" header="Country" />
        <IgrColumn field="age" header="Age" />
        <IgrPaginator key="paginator" perPage="5" displayDensity="cosy"></IgrPaginator>
      </IgrGrid>
    </div>
  );
};
