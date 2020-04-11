import React from 'react';
import data from '../../data.json';
import TableRow from './components/TableRow/tableRow.js';
import TableHeader from './components/tableHeader/tableHeader.js';

export default function Table() {

    console.log(data);

    return (
        <table 
            border={1}
        
        >
            <thead>
                <tr>
                    <TableHeader
                        text="Name"
                    />
                    <TableHeader
                        text="Email"
                    />
                    <TableHeader
                        text="Phone"
                    />
                    <TableHeader
                        text="Nationality"
                    />
                </tr>
            </thead>
            <tbody>
                    {
                        data.results.map((person) => (
                            <TableRow 
                                key={person.phone}
                                person={person}
                            />
                        ))
                    }
            </tbody>
        </table>
    )
}