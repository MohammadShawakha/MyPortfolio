function AppCard(props) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.appImage}
              className="img-fluid rounded-start"
              alt="App Image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.appName}</h5>
              <p className="card-text">{props.appDescription}</p>
              <p className="card-text">
                try the App Live: <a href={props.appUrl.default}>Vist</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppCard;
