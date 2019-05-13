import React, { Component } from 'react';
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
    IconButton
} from 'react-mdl';

import bgImg from '../static/img/cardbg.jpg';

const styling = {
    height: '200px',
    background: `url(${bgImg}) center / cover`
};

class About extends Component {
    render() {
        return (
            <div className='about-grid'>
                <Card
                    shadow={5}
                    style={{
                        width: '80%',
                        height: '100%',
                        margin: 'auto',
                        borderRadius: '10px',
                        marginBottom: '20px'
                    }}
                >
                    <CardTitle style={styling} />
                    <CardText>
                        <h4>Tausta</h4>
                        <p>
                            Joensuun Urho on vuonna 2018 perustettu
                            jalkapalloseura. Pelitoiminnan seura aloitti vuoden
                            2019 puolella. Urhon perustivat kolme pitkään
                            pääasiassa harrastefutista pelanneet kaverukset.
                            Harrastekentiltä divarifutikseen siirtyminen ja
                            muiden joukkueiden riveissä pelaaminen saivat meidät
                            tajuamaan, millainen seura Joensuusta puuttuu.
                        </p>
                        <p>
                            Pelaajistomme on sekoitus kokeneempia alasarjajyriä
                            ja harrastefutiksen parista tulleita pelaajia, jotka
                            haluavat haastavampia pelejä parempia vastustajia
                            vastaan.
                        </p>
                        <p>
                            Haluamme olla sisukas, rehellinen ja
                            taistelutahtoinen joukkue, jossa hyvä henki säilyy
                            läpi koko kauden. Pelaajamme harjoittelevat sekä
                            joukkueen kanssa, itsenäisesti että erilaisten
                            ryhmien mukana
                        </p>
                    </CardText>
                </Card>
                <Card
                    shadow={5}
                    style={{
                        width: '80%',
                        height: '100%',
                        margin: 'auto',
                        borderRadius: '10px'
                    }}
                >
                    <CardText>
                        <h4>Tavoite</h4>
                        <p>
                            Tavoitteenamme on rakentaa jalkapalloseuraa, jossa
                            asioita hoidetaan yhteistyössä pelaajien kanssa
                            hyvässä hengessä. Seura on pelaajia varten ja
                            suurimpana tavoitteena on kehittyminen. Myönteinen,
                            virheitä salliva ilmapiiri on joukkueellemme tärkeä.
                            Opimme toisiltamme ja nautimme onnistumisista.
                            Itsekritiikki ja palautteen antaminen on suotavaa,
                            kielteinen asenne ei.
                        </p>
                        <p>
                            Tällä hetkellä seura ei ylläpidä junioritoimintaa
                            vaan keskittyy Itä-Suomen viidennen divisioonan
                            valloittamiseen.
                        </p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default About;
