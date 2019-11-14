import { React, useState } from 'react';
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
            findings: {
                ruleId: '',
                description: '',
                severity: ''
            },
            queuedAt: '',
            scanningAt: '',
            finishedAt: ''
        }
    }

    addScanReport = () => {
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
        const { name, value } = e.target;
        this.state[name] = value;
        this.setState({ name: value });
    }


    handleFindingsChange = (e) => {
        const { name, value } = e.target;
        this.state.findings[name] = value;
        this.setState(this.state);
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
                                            id="datetime-local"
                                            label="Queued At"
                                            name="queuedAt"
                                            type="datetime-local"
                                            value={this.state.queuedAt}
                                            defaultValue={new Date()}
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
                                            type="datetime-local"
                                            defaultValue={new Date()}
                                            value={this.state.scanningAt}
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
                                            type="datetime-local"
                                            defaultValue={new Date()}
                                            className="form-control textfield"
                                            value={this.state.finishedAt}
                                            onChange={this.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    Findings :
                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Rule Id"
                                            margin="normal"
                                            name="ruleId"
                                            className="form-control textfield"
                                            onChange={this.handleFindingsChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Description"
                                            margin="normal"
                                            name="description"
                                            className="form-control textfield"
                                            onChange={this.handleFindingsChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="standard-basic"
                                            label="Severity"
                                            margin="normal"
                                            name="severity"
                                            className="form-control textfield"
                                            onChange={this.handleFindingsChange}
                                            value={this.state.findings.severity}
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