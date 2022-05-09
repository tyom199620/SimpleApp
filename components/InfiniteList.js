import React from 'react';
import { FlatList } from 'react-native';

export default class InifiniteList extends React.Component {

    state = {
        data: [],
        forComponent: ''
    }

    loadData = () => {
        this.props.request?.().then(res => {
            Object.keys(res.data).map(key => {
                console.log(key);
            })
        })
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.forComponent !== this.state.forComponent) {
            this.setState({ forComponent: this.props.forComponent, data: [] }, this.loadData)
        }
    }

    render() {
        const { Component } = this.props;
        const { data } = this.state;
        return (
            <FlatList
                data={data}
                renderItem={() => {
                    <Component
                        {...this.props}
                    />
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
};