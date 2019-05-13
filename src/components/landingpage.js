import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

import team from '../static/img/urhoteam.jpg';

class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src={team} alt='URHO' className='landing-img' />

                        <div className='banner-text'>
                            <h1>Joensuun Urho </h1>

                            <hr />
                            <Link to='/about'>
                                <p>Lue meistä lisää!</p>
                            </Link>
                            <div className='social-links'>
                                <a
                                    href='https://www.facebook.com/joensuunurho/'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <i
                                        className='fa fa-facebook-square'
                                        aria-hidden='true'
                                    />
                                </a>
                                <a
                                    href='https://www.palloliitto.fi/seura/4179'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <i
                                        className='fa fa-soccer-ball-o'
                                        aria-hidden='true'
                                    />
                                </a>
                                <a
                                    href='mailto:maalispullo@gmail.com?Subject=Yhteydenotto'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <i
                                        className='fa fa-envelope'
                                        aria-hidden='true'
                                    />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage;
//<img src={logo} alt='URHO' className='avatar-img' />
