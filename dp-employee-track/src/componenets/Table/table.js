import React from 'react';
import TableHeader from './components/tableHeader/tableHeader.js';
import TableRow from './components/TableRow/tableRow.js';
import { EventContext, TableContext } from './tableContexts';
import data from '../../data.json';

export default function Table() {
    const [sortBy, setSortBy] = React.useState();
    const [sortOrder, setSortOrder] = React.useState();

    const handleTableHeaderClick = (event) => {
        const target = event.currentTarget;
        const id = target.getAttribute('data-id');

        if (id === sortBy) {
            switch (sortOrder) {
                case 'ASC':
                    setSortOrder('DESC');
                    break;
                case 'DESC':
                    setSortOrder(undefined);
                    setSortBy(undefined);
                    break
                default:
                    break;
            }
        } else {
            setSortBy(id);
            setSortOrder('ASC');
        }

    }

    const tableContext = {
        sortBy,
        sortOrder,
    }

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    };

    let sortedData = data.results;
    const sortOrderModifier = sortOrder === 'ASC' ? 1 : -1;
        switch (sortBy) {
            case "Name":
                sortedData = sortedData.sort((a, b) => {
                    const aName = `${a.name.first} ${a.name.last}`;
                    const bName = `${b.name.first} ${b.name.last}`;
                    return aName.localeCompare(bName) * sortOrderModifier;
                })
                break;
            case "Email":
                sortedData = sortedData.sort((a, b) => a.email.localeCompare(b.email) * sortOrderModifier)
                break;
            case "Phone":
                sortedData = sortedData.sort((a, b) => a.phone.localeCompare(b.phone) * sortOrderModifier)
                break;
            case "Nationality":
                sortedData = sortedData.sort((a, b) => a.nat.localeCompare(b.nat) * sortOrderModifier)
                break;
            default:
                break;
        }

    return (
        <TableContext.Provider value={tableContext}>
            <EventContext.Provider value={eventContext}>
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
                            sortedData.map((person) => (
                                <TableRow 
                                    key={person.phone}
                                    person={person}
                                />
                            ))
                        }
                </tbody>
            </table>
            </EventContext.Provider>
        </TableContext.Provider>
    )
}