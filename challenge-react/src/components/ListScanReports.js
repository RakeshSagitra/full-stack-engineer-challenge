import React, { useEffect, useState } from 'react';
import ScanReportService from '../ScanReportService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';
export default function ListScanReport() {

    const [reports, setReports] = useState([]);
    const [listExist, setListExist] = useState(false);
    useEffect(() => {
        if (!listExist) {
            ScanReportService.getList()
                .then(response => setReports(response.data ? response.data.data : []))
                .catch(console.log)
            setListExist(true)
        }
    })

    return (
        <Paper className='root'>
            <Link className="link" to="/add-scan-report/">
                <Button className='primary-button'>Add New Scan Result</Button>
            </Link>
            <h3>Scan Results</h3>
            <Table aria-label="simple table" className="table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table tabhead" align="center">Status</TableCell>
                        <TableCell className="table tabhead" align="center">Repository Name</TableCell>
                        <TableCell className="table tabhead" align="center">Queued At</TableCell>
                        <TableCell className="table tabhead" align="center">Scanning At</TableCell>
                        <TableCell className="table tabhead" align="center">Finished At</TableCell>
                        <TableCell className="table tabhead" align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.map(row => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center">{row.repositoryName}</TableCell>
                            <TableCell align="center"><Moment format="DD MMM YYYY hh:mm">{row.queuedAt}</Moment></TableCell>
                            <TableCell align="center"><Moment format="DD MMM YYYY hh:mm">{row.scanningAt}</Moment></TableCell>
                            <TableCell align="center"><Moment format="DD MMM YYYY hh:mm">{row.finishedAt}</Moment></TableCell>
                            <TableCell align="center">
                                <Link className="link" to={`scan-report-details/${row.id}`}>
                                    <Button color="primary">Details</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}