import { Routes, Route } from "react-router-dom";
import HomePage from "./home-page/home-page";
import ListPage from "./list-page/list-page";
import AppPage from "./app-page/app-page";
import NotFound from "./not-found/not-found";
function App() {
  return (
    <Routes>
      <Route path="/Portfolio/" element={<HomePage />} />
      <Route path="/Portfolio" element={<HomePage />} />
      <Route path="/Portfolio/AppsPage">
        <Route index element={<ListPage />} />
        <Route path=":name" element={<AppPage />} />
      </Route>
      <Route path="/Portfolio/NotFound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
