import React, { Component } from "react";

const withData = (View) => {
    return class extends Component {

        state = {
            itemList: null,
            error: false,
            loading: true
        };

        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        };

        pepopleOnLoaded = (itemList) => {
            this.setState({ itemList, loading: false });
        }

        componentDidMount() {
            this.props.getData()
                .then(this.pepopleOnLoaded)
                .catch(this.onError)
        };

        render() {
            const data = this.state;

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;