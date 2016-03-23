// import React, {Component} from 'react';
// import {match, RouterContext} from 'react-router';

// export default class Match extends Component {
//     constructor() {
//         super();
//         this.state = {children: null};
//     }

//     componentWillReceiveProps() {
//         const {routes, location} = this.props;

//         match({routes, location}, (err, redirectLocation, renderProps) => {
//             this.setState({
//                 children: <RouterContext {...renderProps}/>
//             });
//         });
//     }

//     render() {
//         return this.state.children;
//     }
// }

// import React, {Component} from 'react';
// // import {render} from 'react-dom';
// import {RouterContext} from 'react-router';


// export default class Match extends Component {
//     static get contextTypes() {
//         return {
//             router: 
//         }
//     }

//     render() {
//         return (
//             <RouterContext {...this.props}/>
//         );
//     }
// }

// import React from 'react';
// import {RouterContext, match} from 'react-router';

// export default ({routes, location}) => {
//     return match({routes, location}, (err, redirectLocation, renderProps) => {
//         return (<RouterContext {...renderProps} />);
//     });
// };

import React, {Component} from 'react';
import {RouterContext, match} from 'react-router';
import {render} from 'react-dom';

export default class Match extends Component {
    componentWillUpdate() {
        const {routes, location} = this.props;

        match({routes, location}, (err, redirectLocation, renderProps) => {
            render(<RouterContext {...renderProps} />, this.refs.root);
        });
    }

    componentDidUpdate() {
        const {routes, location} = this.props;

        match({routes, location}, (err, redirectLocation, renderProps) => {
            render(<RouterContext {...renderProps} />, this.refs.root);
        });
    }

    render() {
        return (
            <div ref="root"></div>
        );
    }
}
