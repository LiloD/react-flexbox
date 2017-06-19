import React from 'react';

function DebugHOC(wrappedComponent) {
    return (
        class DebugHoc extends wrappedComponent {
            render() {
                const wrappedElement = super.render();
                const { children, ...otherProps} = this.props;
                console.info('children:', children);
                return (
                    <div>
                        <pre>
                            Props: {JSON.stringify(otherProps, null, 2)}
                        </pre>
                        {wrappedElement}
                    </div>
                );
            }
        }
    );
}

export default DebugHOC;