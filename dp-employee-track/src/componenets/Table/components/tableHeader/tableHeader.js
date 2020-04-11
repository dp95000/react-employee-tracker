import React from 'react';

export default function TableHeader(props) {
    const {
        text
    } = props;

    return (
        <th>{text}</th>
    )
}