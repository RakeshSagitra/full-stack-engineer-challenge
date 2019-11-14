import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentService from '../ScanReportService';
import { withRouter } from 'react-router';
class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    deleteDocument = () => {
        DocumentService.deleteApi('delete-document?id=' + this.props.obj._id)
            .then(json => {
                if (json.data.statusCode === 200) {
                    alert('Record deleted successfully!!');
                    this.props.history.push('/add-scan-report')
                }
                else {
                    alert('something went wrong!!');
                    this.props.history.push('/index')
                }
            }).catch((error) => {
                console.log("error-----------", error)
            })
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.status}
                </td>
                <td>
                    {this.props.obj.repositoryName}
                </td>
                <td>
                    {this.props.obj.queuedAt}
                </td>
                <td>
                    {this.props.obj.scanningAt}
                </td>
                <td>
                    {this.props.obj.finishedAt}
                </td>
            </tr>
        );
    }
}

export default withRouter(TableRow);
