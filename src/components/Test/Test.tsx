import * as React from 'react';
import { Nuka } from './Nuka'

interface Props { }
interface State { }

export class Test extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nuka />
        );
    }
}