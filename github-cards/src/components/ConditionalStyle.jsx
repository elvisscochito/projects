import React from 'react';

class ConditionalStyle extends React.Component {
    render () {
        return (
            <div style={{ color: Math.random() < 0.5 ? 'green' : 'red' }}>ConditionalStyle</div>
        );
    };
};

export default ConditionalStyle;
