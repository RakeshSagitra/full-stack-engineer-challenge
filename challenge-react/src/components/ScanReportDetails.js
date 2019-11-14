import React, { Component } from 'react';
import ScanReportService from '../ScanReportService';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Link from 'react-router-dom/Link'
import Moment from 'react-moment';
import 'moment-timezone';
let styles = {
    marginTop: '100px'
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});
class ScanReportDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { details: {} };
        this.documentService = new ScanReportService();
    }
    componentDidMount() {
        ScanReportService.getById(this.props.match.params.id)
            .then(response => this.setState({ details: response.data ? response.data.data : {} }))
            .catch(console.log)
    }
    tabRow() {
        return this.state.items.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        })
    }


    render() {
        // const classes = useStyles();
        // const rowId = this.props.row && this.props.row.id;
        const { details } = this.state
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
                                    <Typography>
                                        Rule Id : {findings.ruleId}
                                    </Typography>
                                    <Typography>
                                        Description : {findings.description}
                                    </Typography>
                                    <Typography>
                                        Severity : {findings.severity}
                                    </Typography>
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
}

export default ScanReportDetails;