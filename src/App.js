import React, { Component } from 'react';
import Block from './components/Block';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Block
                    flex
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                    <Block className='item'>delta</Block>
                </Block>

                <Block
                    flex
                    direction='row-reverse'
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                    <Block className='item'>delta</Block>
                </Block>

                <Block
                    flex
                    wrap='wrap'
                    className='container'
                    style={{
                        width: '150px',
                    }}
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                    <Block className='item'>delta</Block>
                </Block>

                <Block
                    flex
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block flex='1' className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                </Block>

                <Block
                    flex
                    direction='column'
                    className='container'
                    style={{
                        height: '250px'
                    }}
                >
                    <Block className='item'>alpha</Block>
                    <Block flex='1' className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                </Block>

                <Block
                    flex
                    align='flex-start'
                    className='container'
                    style={{
                        height: '200px'
                    }}
                >
                    <Block className='item'>start</Block>
                </Block>

                <Block
                    flex
                    align='center'
                    className='container'
                    style={{
                        height: '200px'
                    }}
                >
                    <Block className='item'>center</Block>
                </Block>

                <Block
                    flex
                    align='flex-end'
                    className='container'
                    style={{
                        height: '200px'
                    }}
                >
                    <Block className='item'>end</Block>
                </Block>

                <Block
                    flex
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                </Block>

                <Block
                    flex
                    justify='center'
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                </Block>

                <Block
                    flex
                    justify='space-between'
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                </Block>

                <Block
                    flex
                    justify='space-around'
                    className='container'
                >
                    <Block className='item'>alpha</Block>
                    <Block className='item'>beta</Block>
                    <Block className='item'>gamma</Block>
                </Block>


                <Block
                    flex
                    align='center'
                    justify='center'
                    className='container'
                    style={{
                        height: '200px'
                    }}
                >
                    <Block className='item'>center</Block>
                </Block>

                <Block
                    flex
                    className='container'
                    style={{
                        height: '200px'
                    }}
                >
                    <Block flex='1' alignSelf='flex-start' className='item'>alpha</Block>
                    <Block flex='1' alignSelf='center' className='item'>beta</Block>
                    <Block flex='1' alignSelf='flex-end' className='item'>gamma</Block>
                    <Block flex='2' alignSelf='stretch' className='item'>delta</Block>
                </Block>

            </div>
        );
    }
}

export default App;
