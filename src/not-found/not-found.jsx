import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/Portfolio/">Go To Home Page</Link>
    </>
  );
}
export default NotFound;
