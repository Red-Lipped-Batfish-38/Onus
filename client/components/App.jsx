import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Project from '../components/Project.jsx';
import TasksContainer from '../containers/TasksContainer.jsx';
import Login from '../containers/LoginPage.jsx';
// import '../styles.scss';
import HomeContainer from '../containers/HomePage.jsx';
import NavbarMain from './NavbarMain.jsx';

const App = () => {
  const { userID } = useParams();
  return (
    <div>
      {/* header to persist through page, can link back to homepage, signout, switchuser */}
      <NavbarMain className="navbar-main" />
      <h1>WELCOME</h1>
      <Routes>
        {/* Auto load to Login page/> */}
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path={`/homepage`} element={<HomeContainer />} />
        {/* <Route path=":userId" element={<ProfilePage />} /> */}
        <Route
          exact
          path={`user/:userID/project/:projectID/task/:taskID`}
          element={<TasksContainer />}
        />
        <Route exact path={`/project`} element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
