import React, { Component } from "react";
import { Record } from "../item-details";

const withDetails = (View, getData, getPersonImage, personRecord) => {
    return class extends Component {

        state = {
            item: {},
            loading: true,
            error: false,
            image: null
        };

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.setState({ loading: true, error: false })
                this.updateItem();
            }
        }

        personOnLoaded = (item, getPersonImage) => {
            this.setState({
                item,
                loading: false,
                image: getPersonImage(item)
            });
        }

        updateItem() {

            const { itemId } = this.props;

            if (!itemId) {
                return
            }
            getData(itemId)
                .then((item) => { this.personOnLoaded(item, getPersonImage) })
                .catch(this.onError);
        };

        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        };

        render() {

            const data = this.state;

            const mapPersonRecord = personRecord.map((item, index) => {
                return <Record {...item} key={index}></Record>;
            })

            return (
                <View {...this.props} data={data} >

                    {mapPersonRecord}

                </View>
            )
        };
    };
};

export default withDetails;
