import React, { useState, useEffect } from 'react';
import ScanReportService from '../ScanReportService';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';

export default function ScanReportDetails(props) {
    const [details, setDetails] = useState({});
    const [detailsExist, setDetailsExist] = useState(false);
    useEffect(() => {
        if (!detailsExist) {
            ScanReportService.getById(props.match.params.id)
                .then(response => setDetails(response.data ? response.data.data : {}))
                .catch(console.log)
            setDetailsExist(true)
        }
    });
    // const classes = useStyles();
    // const rowId = this.props.row && this.props.row.id;
    const findings = details && details.findings || {}
    return (
        <Paper >
            <Link className="link" to="/">
                <Button className='primary-button'>back to list of scan reports</Button>
            </Link>
            <h3>Scan Report Details</h3>
            <Card className='card'>
                <CardContent>
                    Status : <Typography className='title' color="textSecondary" align="center" gutterBottom>
                        {details.status}
                    </Typography>
                    Findings
                        <Card className='card'>
                        <CardContent>
                            <Typography className='title' color="textSecondary" gutterBottom>
                                Rule Id : {findings.ruleId}
                                <br />
                                Description : {findings.description}
                                <br />
                                Severity : {findings.severity}

                            </Typography>
                        </CardContent>
                    </Card>
                    Queued At :<Typography className='title' color="textSecondary" align="center" gutterBottom>
                        <Moment format="DD MMM YYYY hh:mm">{details.queuedAt}</Moment>
                    </Typography>
                    Scanning At :<Typography className='title' color="textSecondary" align="center" gutterBottom>
                        <Moment format="DD MMM YYYY hh:mm">{details.scanningAt}</Moment>
                    </Typography>
                    Finished At :<Typography className='title' color="textSecondary" align="center" gutterBottom>
                        <Moment format="DD MMM YYYY hh:mm">{details.finishedAt}</Moment>
                    </Typography>
                </CardContent>
            </Card>

        </Paper>
    );
}