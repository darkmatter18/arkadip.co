import React from 'react';
import {Grid, Typography, Container, Button} from '@material-ui/core';

import VersionInfo from '../../../component/VersionInfo';
import {EMAIL_ID} from "../../../constant";
import HomeContactModal from '../HomeContactModal';

import {ReactComponent as Envelope} from './envelope.svg';
import {ReactComponent as MapMarker} from './mapmarker.svg';
import {ReactComponent as Phone} from './phone.svg';

class HomeContactArea extends React.Component {

    state = {modalOpen: false}

    onContactButtonClick = () => {
        this.setState({modalOpen: true})
    }

    onModalClose = () => {
        console.log('Modal Close');

        this.setState({modalOpen: false})
    }

    render() {
        const year = new Date().getFullYear()
        const {modalOpen} = this.state;

        return (
            <React.Fragment>
                <div style={{backgroundColor: '#000000', color: '#ffffff'}}>
                    <Grid container justify="center" style={{paddingTop: '6rem'}}>
                        <Grid item lg={12}>
                            <Typography align="center" variant="h5"
                                        style={{fontFamily: 'poppins-bold, sans-serif', color: '#00ad45'}}>
                                Contact
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{paddingTop: '1rem'}}>
                        <Grid item lg={12}>
                            <Typography align="center" variant="h4"
                                        style={{fontFamily: 'poppins-bold, sans-serif', color: '#ffffff'}}>
                                I'd Love To Hear From You.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Container style={{paddingTop: '4rem', paddingBottom: '2rem'}}>
                        <Grid container spacing={2} justify="center">
                            <Grid item lg={4}>
                                <div>
                                    <MapMarker style={{
                                        textAlign: 'center',
                                        height: '2em',
                                        width: '2em',
                                        display: 'block',
                                        margin: 'auto'
                                    }}/>
                                </div>
                                <Typography variant="h5" align="center"
                                            style={{marginTop: '6px', marginBottom: '12px'}}>
                                    Where to Find Me
                                </Typography>
                                <Typography variant="subtitle2" align="center" style={{opacity: 0.6}}>
                                    South Raipur, <br/>
                                    Mankar (713144) <br/>
                                    Pubra Burddhaman <br/>
                                    West Bengal, INDIA
                                </Typography>
                            </Grid>
                            <Grid item lg={4}>
                                <div>
                                    <Envelope style={{
                                        textAlign: 'center',
                                        height: '2em',
                                        width: '2em',
                                        display: 'block',
                                        margin: 'auto'
                                    }}/>
                                </div>
                                <Typography variant="h5" align="center"
                                            style={{marginTop: '6px', marginBottom: '12px'}}>
                                    E-Mail me at
                                </Typography>

                                <a href={`mailto:${EMAIL_ID}`} style={{color: '#ffffff'}}>
                                    <Typography variant="subtitle2" align="center" style={{opacity: 0.6}}>
                                        {EMAIL_ID}
                                    </Typography>
                                </a>
                                <br/>

                            </Grid>
                            <Grid item lg={4}>
                                <div>
                                    <Phone style={{
                                        textAlign: 'center',
                                        height: '2em',
                                        width: '2em',
                                        display: 'block',
                                        margin: 'auto'
                                    }}/>
                                </div>
                                <Typography variant="h5" align="center"
                                            style={{marginTop: '6px', marginBottom: '12px'}}>
                                    Contact
                                </Typography>
                                <Typography variant="subtitle2" align="center" style={{opacity: 0.6}}>
                                    <Button variant="outlined" color="inherit" onClick={this.onContactButtonClick}>
                                        Ask for Number
                                    </Button>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container style={{paddingTop: '6rem'}} justify="center">
                            <Grid item lg={6} sm={12} md={12}>
                                <Typography align="left" variant="body1">
                                    &copy; Arkadip, {year}
                                </Typography>
                            </Grid>
                            <Grid item lg={6} sm={12} md={12}>
                                <Typography align="right">
                                    <VersionInfo/>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container justify="center">
                            <Grid item lg={12} sm={12} md={12}>
                                <Typography align="center">
                                    Made with <span role="img" aria-label="green-heart">💚</span> by <b>Arkadip</b>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <HomeContactModal open={modalOpen} close={this.onModalClose} modalkey="contact"/>
            </React.Fragment>
        )
    }
}

export default HomeContactArea;