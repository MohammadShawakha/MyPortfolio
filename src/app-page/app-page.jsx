import { useParams, Navigate } from "react-router-dom";
import { getAppData } from "../appsData/appsData";

function AppPage() {
  const { name } = useParams();

  const appList = getAppData();
  const result = appList.find((obj) => {
    return obj.appName === name;
  });
  if (result === undefined) {
    return <Navigate to="/Portfolio/NotFound" />;
  } else {
    return (
      <>
        <iframe className="appFrame" src={result.appUrl}></iframe>
      </>
    );
  }
}

export default AppPage;
