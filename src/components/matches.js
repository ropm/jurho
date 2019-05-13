import React, { Component } from 'react';
import { Grid, DataTable, TableHeader } from 'react-mdl';

class Matches extends Component {
    render() {
        return (
            <div style={{ width: '90%', height: '100%' }}>
                <h1 className='otteluohjelma'>Otteluohjelma</h1>
                <Grid>
                    <DataTable
                        className='table'
                        shadow={0}
                        rows={[
                            {
                                pvm: '9.5, 20:00',
                                koti: 'JUrho',
                                vieras: 'IRPA',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '16.5, 20:00',
                                koti: 'JUrho',
                                vieras: 'NiemU',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '23.5, 20:00',
                                koti: 'JUrho',
                                vieras: 'JoPS/2',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '8.6, 14:30',
                                koti: 'LehPa/2',
                                vieras: 'JUrho',
                                sijainti: 'Lehmo'
                            },
                            {
                                pvm: '15.6, 17:00',
                                koti: 'Yllätys',
                                vieras: 'JUrho',
                                sijainti: 'Ylämylly'
                            },
                            {
                                pvm: '27.6, 20:00',
                                koti: 'JUrho',
                                vieras: 'JoPS',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '7.7, 18:00',
                                koti: 'Hurtat',
                                vieras: 'JUrho',
                                sijainti: 'Lieksa'
                            },
                            {
                                pvm: '19.7, 20:00',
                                koti: 'IRPA',
                                vieras: 'JUrho',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '26.7, 19:00',
                                koti: 'NiemU',
                                vieras: 'JUrho',
                                sijainti: 'Nieminen'
                            },
                            {
                                pvm: '3.8, 12:00',
                                koti: 'JoPs/2',
                                vieras: 'JUrho',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '8.8, 20:00',
                                koti: 'JUrho',
                                vieras: 'LehPa/2',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '15.8, 20:00',
                                koti: 'JUrho',
                                vieras: 'Yllätys',
                                sijainti: 'Koillispuisto'
                            },
                            {
                                pvm: '26.8, 20:00',
                                koti: 'JoPs',
                                vieras: 'JUrho',
                                sijainti: 'Mehtimäki'
                            },
                            {
                                pvm: '29.8, 20:00',
                                koti: 'JUrho',
                                vieras: 'Hurtat',
                                sijainti: 'Lieksa'
                            }
                        ]}
                    >
                        <TableHeader name='pvm' tooltip='Aika ja päivä'>
                            Pvm
                        </TableHeader>
                        <TableHeader name='koti' tooltip='Kotijoukkue'>
                            Koti
                        </TableHeader>
                        <TableHeader name='vieras' tooltip='Vierasjoukkue'>
                            Vieras
                        </TableHeader>
                        <TableHeader name='sijainti' tooltip='Pelipaikka'>
                            Pelipaikka
                        </TableHeader>
                    </DataTable>
                </Grid>
            </div>
        );
    }
}

export default Matches;
