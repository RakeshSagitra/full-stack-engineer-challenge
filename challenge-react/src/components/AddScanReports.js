import React from 'react';
import ScanReportService from '../ScanReportService';
import TextField from '@material-ui/core/TextField';
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class AddScanReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '',
            repositoryName: '',
            ruleId: null,
            description: '',
            severity: '',
            queuedAt: '',
            scanningAt: '',
            finishedAt: ''
        }
    }

    addScanReport = () => {
        this.state.findings = {
            ruleId: this.state.ruleId,
            description: this.state.description,
            severity: this.state.severity
        }
        delete this.state.ruleId
        delete this.state.description
        delete this.state.severity
        ScanReportService.create(this.state)
            .then(json => {
                if (json.data.statusCode === 200 || json.data.statusCode === 201) {
                    this.props.history.push('/index')
                }
                else {
                    alert('something went wrong!!');
                    this.props.history.push('/index')
                }
            }).catch((error) => {
                console.log("error-----------", error)
            })
    }

    handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Paper className='root'>
                <div className="form">
                    <Link className="link" to="/">
                        <Button className='primary-button'>list of Scan Results</Button>
                    </Link>
                    <form className="container">
                        <h2 className="text-center">Add Scan Result</h2>
                        <div className="row justify-content-md-center">
                            <div className="col-md-6 col-md-offset-3">
                                <form className="form" noValidate autoComplete="off">
                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Status"
                                            margin="normal"
                                            name="status"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            value={this.state.status}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Repository Name"
                                            margin="normal"
                                            name="repositoryName"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            value={this.state.repositoryName}
                                        />
                                    </div>
                                    <div className="form-group">

                                        <TextField
                                            id="standard-basic"
                                            label="Rule Id"
                                            margin="normal"
                                            name="ruleId"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            value={this.state.ruleId}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Description"
                                            margin="normal"
                                            name="description"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            value={this.state.description}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Severity"
                                            margin="normal"
                                            name="severity"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            value={this.state.severity}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            id="datetime-local"
                                            label="Queued At"
                                            name="queuedAt"
                                            type="datetime-local"
                                            value={this.state.queuedAt}
                                            defaultValue="2019-11-13T10:30"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            id="datetime-local"
                                            label="Scanning At"
                                            name="scanningAt"
                                            value={this.state.scanningAt}
                                            type="datetime-local"
                                            defaultValue="2019-11-13T10:30"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            id="datetime-local"
                                            label="Finished At"
                                            name="finishedAt"
                                            value={this.state.finishedAt}
                                            type="datetime-local"
                                            defaultValue="2019-11-13T10:30"
                                            className="form-control textfield"
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <button type="button" onClick={this.addScanReport} className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </form>
                </div>
            </Paper>
        );
    }

}

export default AddScanReport;