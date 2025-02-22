import "./index.css";
import AntSelect from "./components/select/AntSelect";

function App() {
  return (
    <div
      className="d-flex w-full justify-center align-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex gap-4">
        <AntSelect
          size="large"
          allowClear
          placeholder="Select User"
          mode="tags"
          style={{ width: 400 }}
          label="select user"
          required
        />
      </div>
    </div>
  );
}

export default App;
