import React from 'react';
import { EventContext, TableContext } from '../../tableContexts';

export default function TableHeader(props) {
    const tableContext = React.useContext(TableContext);
    const eventContext = React.useContext(EventContext);

    const {
        text
    } = props;

    const {
        sortBy,
        sortOrder,
    } = tableContext;

    return (
        <th
            data-id={text}
            onClick={eventContext.onTableHeaderClick}
        >
            {text}
            {sortBy === text && sortOrder}
        </th>
    )
}