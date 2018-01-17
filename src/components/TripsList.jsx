import React, { Component } from 'react';
import { connect } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import * as ICONS from 'material-ui-icons';
import { withStyles } from 'material-ui/styles'

const styles = ({
    list: {
        border: '1px solid silver'
    }
})

class TripsList extends Component {
    render() {
        return (
            <List className={this.props.classes.list}>
                {this.props.trips.map((item) => <ListItem key={'trips_' + item.id} button><ListItemIcon><ICONS.ArrowForward/></ListItemIcon><ListItemText primary={item.name}></ListItemText></ListItem>)}
            </List>
        );
    }
}

export default connect((state) => ({
    trips: state.trips.items
}))(withStyles(styles)(TripsList));