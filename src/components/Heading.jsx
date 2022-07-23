import React from 'react';
import classes from './Heading.module.scss';


export default function Heading(props) {
  return (
    <h1>{props.text}</h1>
  );
}