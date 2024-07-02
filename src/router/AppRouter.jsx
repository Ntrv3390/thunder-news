import { Routes, Route } from "react-router-dom";
import React from "react";
import News from "../components/News";

const AppRouter = (props) => {
  return (
    
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              apiKey={props.apiKey}
              key="home"
              title="Top Thrilling News!"
              country="in"
              category="general"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              apiKey={props.apiKey}
              key="business"
              title="Thrilling Business News!"
              country="in"
              category="business"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              apiKey={props.apiKey}
              key="entertainment"
              title="Thrilling Entertainment News!"
              country="in"
              category="entertainment"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              apiKey={props.apiKey}
              key="general"
              title="Thrilling News!"
              country="in"
              category="general"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              apiKey={props.apiKey}
              key="health"
              title="Thrilling Health News!"
              country="in"
              category="health"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              apiKey={props.apiKey}
              key="science"
              title="Thrilling Science News!"
              country="in"
              category="science"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              apiKey={props.apiKey}
              key="sports"
              title="Thrilling Sports News!"
              country="in"
              category="sports"
              pageSize={props.pageSize}
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              apiKey={props.apiKey}
              key="technology"
              title="Thrilling Technology News!"
              country="in"
              category="technology"
              pageSize={props.pageSize}
            />
          }
        />
      </Routes>
  );
};

export default AppRouter;
