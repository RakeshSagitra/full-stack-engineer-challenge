import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import ListScanReport from './components/ListScanReports';
import AddScanReport from './components/AddScanReports';
import ScanReportDetails from './components/ScanReportDetails';

ReactDOM.render(<Router>
    <div>
        <Route exact path='/' component={ListScanReport} />
        <Route path='/add-scan-report' component={AddScanReport} />
        <Route path='/index' component={ListScanReport} />
        <Route path='/scan-report-details/:id' component={ScanReportDetails} />
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
