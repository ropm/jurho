import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import logo from '../static/img/urhologovector.png';

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <div className='banner-text-contact'>
                            <h1>Ota rohkeasti yhteyttä!</h1>
                            <hr />
                            <p>
                                Jos haluat tulla treenaamaan kanssamme tai
                                olisit kiinnostunut liittymään joukkueeseen,
                                niin ota meihin yhteyttä ensin ja sitten
                                ilmaannu treeneihin sinulle ilmoitettuina
                                ajankohtina!
                            </p>
                            <p>
                                Meidät saa helpoiten kiinni Facebookin kautta
                                tai sähköpostitse!
                            </p>
                            <p>Seuran yhteyshenkilö on Jani Martikainen</p>
                        </div>
                        <img src={logo} alt='URHO' className='avatar-img' />
                    </Cell>
                    <Cell col={6}>
                        <div className='banner-text'>
                            <h1>Yhteystiedot</h1>
                            <hr />
                            <div className='social-links-contact'>
                                <a
                                    href='https://www.facebook.com/joensuunurho/'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    <i
                                        className='fa fa-facebook-square'
                                        aria-hidden='true'
                                    />
                                    <p>Facebook</p>
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
                                    <p>Sähköposti</p>
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
                                    <p>Palloliiton sivu</p>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
