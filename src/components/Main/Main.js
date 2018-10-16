import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
   Intro,
   Login,
   Register,
   Editor,
   Template,
   Community,
   PostView,
   PostWriter,
   Profile
} from 'pages';
const Main = () => {
   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/editor" component={Editor} />
         <Route path="/template" component={Template} />
         <Route path="/community" component={Community} />
         <Route path="/postview" component={PostView} />
         <Route path="/postwriter" component={PostWriter} />
         <Route path="/profile" component={Profile} />
         <Route path="/" component={Intro} />
      </Switch>
   );
};

export default Main;
