import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const mediaList = [
  {
    id: "netflix",
    name: "Netflix",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    cls: "nf"
  },
  {
    id: "hbomax",
    name: "HBO Max",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    cls: "hb"
  },
  {
    id: "hulu",
    name: "Hulu",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Hulu_logo_%282018%29.svg",
    cls: "hu"
  },
  {
    id: "prime",
    name: "Prime Video",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    cls: "pr"
  }
];

export default function App() {
  return (
    <Router>
      <h5 className="mt-4 d-flex justify-content-center fw-bold">
        TV APPS
      </h5>

      <div className="d-flex justify-content-center my-4">
        {mediaList.map(app => (
          <Link key={app.id} to={`/${app.id}`} className="mx-3">
            <img
              src={app.img}
              alt={app.name}
              className={app.cls}
            />
          </Link>
        ))}
      </div>

      <Switch>
        <Route path="/:id">
          <Child />
        </Route>
      </Switch>
    </Router>
  );
}

function Child() {
  const { id } = useParams();

  return (
    <div className="text-center my-4">
      <h3>
        You Selected: <span>{id}</span>
      </h3>
    </div>
  );
}