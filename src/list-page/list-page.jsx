import AppCard from "../app-card/app-card";
function ListPage() {
  const appList = [
    {
      appName: "To Do App",
      appImage: "/appsImages/toDoAppImage.png",
      appDescription:
        "This is a full ToDoApp built with React JS, CSS, and HTML.",
      appUrl: "https://mohammadshawakha.github.io/React-Js-Full-toDoApp/",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        {appList.map((item, i) => (
          <AppCard
            key={i}
            appName={item.appName}
            appImage={item.appImage}
            appDescription={item.appDescription}
            appUrl={item.appUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ListPage;
