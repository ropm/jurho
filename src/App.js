import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Layout,
    Header,
    HeaderRow,
    Navigation,
    Drawer,
    Content
} from 'react-mdl';
import Routes from './components/main';

import './App.css';

class App extends Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render() {
        return (
            <div className='demo-big-content'>
                <Layout>
                    <Header
                        className='header-color'
                        title={
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                to='/'
                            >
                                Joensuun Urho
                            </Link>
                        }
                        scroll
                    >
                        <Navigation>
                            <Link to='/'>Etusivu</Link>
                            <Link to='/about'>Tietoa</Link>
                            <Link to='/matches'>Otteluohjelma</Link>
                            <Link to='/contact'>Yhteystiedot</Link>
                        </Navigation>
                    </Header>
                    <Drawer
                        title={
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'black'
                                }}
                                to='/'
                            >
                                Joensuun Urho
                            </Link>
                        }
                    >
                        <Navigation>
                            <Link to='/' onClick={() => this.hideToggle()}>
                                Etusivu
                            </Link>
                            <Link to='/about' onClick={() => this.hideToggle()}>
                                Tietoa
                            </Link>
                            <Link
                                to='/matches'
                                onClick={() => this.hideToggle()}
                            >
                                Otteluohjelma
                            </Link>
                            <Link
                                to='/contact'
                                onClick={() => this.hideToggle()}
                            >
                                Yhteystiedot
                            </Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className='page-content' />
                        <Routes />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
