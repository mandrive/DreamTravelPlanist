import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TripsList from './../components/TripsList'
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    contentGrid: {
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20
    },
    flex: {
        flex: 1
    }
});

class MainContainer extends Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar
                    position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={this.props.classes.flex}>
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper>
                            <TripsList></TripsList>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(MainContainer);