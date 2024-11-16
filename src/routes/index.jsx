import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div style={{ margin: "0px auto", width: "100vw", textAlign: "center" }}>
      <h1>This is Home page</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
