const appData = [
    {
        key:"1",
        appName: "To Do App",
        appImage:"to-do-app.png",
        appDescription:
          "This is a full ToDoApp built with React JS, CSS, and HTML.",
        appUrl: "https://mohammadshawakha.github.io/React-Js-Full-toDoApp/",
      },{
        key:"2",
        appName: "QR Code Generator App",
        appImage:"qr-code-generator-app.png",
        appDescription:
          "This is a Qr-code generator app build using React js.",
        appUrl: "https://mohammadshawakha.github.io/QR-Code-App/",
      }
  ];
  
  const getAppData = () => {
    return appData;
  }
  
  export {getAppData};