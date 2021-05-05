import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AllQuestions from "./Components/AllQuestions/AllQuestions";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AllQuestions} exact />
          {/*  <Route path="/Doctors" component={HomePage} exact />
    <Route path="/aboutUs" component={Aboutus} />
    <Route path="/desk" component={Desk} />
    <Route
      path="/statebranchofficials"
      component={StateBranchOfficials}
    />
    <Route path="/covid" component={Covid} />
    <Route path="/lifeMembershipForm" component={LifeMemberShipForm} />
    <Route path="/centralnews" component={CentralNews} />
    <Route path="/allnews" component={AllNews} />

     <Route path="/gallery" component={Folders} /> 
    <Route path="/branchNews" component={BranchNews} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
