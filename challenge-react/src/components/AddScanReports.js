import React, { useState } from 'react';
import ScanReportService from '../ScanReportService';
import TextField from '@material-ui/core/TextField';
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export default function AddScanReport() {
    const [report, setReport] = useState({
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
    });
    // const [status, setStatus] = useState('');
    // const [repositoryName, setRepositoryName] = useState('');
    // const [findings, setFindings] = useState({});
    // const [queuedAt, setQueuedAt] = useState('');
    // const [scanningAt, setScanningAt] = useState('');
    // const [finishedAt, setFinishedAt] = useState('');
    //console.log(report.findings.ruleId)
    const addScanReport = (props) => {
        ScanReportService.create(report)
            .then(json => {
                if (![200, 201].includes(json.data.statusCode)) {
                    alert('something went wrong!!');
                }
                console.log(props.history)
                props.history.push('/index')
            }).catch(console.error)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(report)
        console.log(name)
        console.log(value)
        setReport((prevState) => {
            return ({ ...prevState, [name]: value })
        });
    }


    const handleFindingsChange = (e) => {
        const { name, value } = e.target;
        console.log(report)
        console.log(name)
        console.log(value)
        report.findings[name] = value;
        setReport((prevState) => {
            console.log(prevState)
            return ({ ...prevState, findings: { ...prevState.findings, [name]: value } })
        });
    }

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
                                        onChange={handleChange}
                                        value={report.status}
                                    />
                                </div>

                                <div className="form-group">
                                    <TextField
                                        id="standard-basic"
                                        label="Repository Name"
                                        margin="normal"
                                        name="repositoryName"
                                        className="form-control textfield"
                                        onChange={handleChange}
                                        value={report.repositoryName}
                                    />
                                </div>

                                <div className="form-group">
                                    <TextField
                                        id="datetime-local"
                                        label="Queued At"
                                        name="queuedAt"
                                        type="datetime-local"
                                        value={report.queuedAt}
                                        defaultValue={new Date()}
                                        className="form-control textfield"
                                        onChange={handleChange}
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
                                        value={report.scanningAt}
                                        className="form-control textfield"
                                        onChange={handleChange}
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
                                        value={report.finishedAt}
                                        onChange={handleChange}
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
                                        value={report.findings.ruleId || ''}
                                        onChange={handleFindingsChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="standard-basic"
                                        label="Description"
                                        margin="normal"
                                        name="description"
                                        className="form-control textfield"
                                        value={report.findings.description || ''}
                                        onChange={handleFindingsChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        id="standard-basic"
                                        label="Severity"
                                        margin="normal"
                                        name="severity"
                                        className="form-control textfield"
                                        onChange={handleFindingsChange}
                                        value={report.findings.severity || ''}
                                    />
                                </div>
                                <div>
                                    <button type="button" onClick={addScanReport} className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </Paper>
    );

}