import AppCard from "../app-card/app-card";
import { getAppData } from "../appsData/appsData";
import { getImageUrl } from "../utils/image-util";
function ListPage() {
  const appList = getAppData();

  return (
    <>
      <div className="container-fluid">
        {appList.map((item, i) => (
          <AppCard
            key={item.key}
            appName={item.appName}
            appImage={getImageUrl(item.appImage)}
            appDescription={item.appDescription}
            appUrl={item.appUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ListPage;
