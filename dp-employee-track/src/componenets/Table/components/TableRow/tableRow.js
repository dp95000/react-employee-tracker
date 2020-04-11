import React from 'react';

export default function TableRow(props) {
    const {
        person: {
            name,
            email,
            phone,
            nat,
        }
    } = props;

    return (
        <tr>
            <td>{`${name.first} ${name.last}`}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{nat}</td>
        </tr>
    )
}