import React from 'react'
import Navbar from '../../Components/Navigations/Navbar/Navbar'
import Modal from '../../Components/UI/Modal/Modal'
import Control from '../../Components/Control/Control'
import Order from '../../Components/UI/Order/Order'
import Wrapper from '../../hoc/Wrapper'
import axios from '../../axios'
import Successful from '../../Components/UI/Success-Message/Successful'

class Shopping extends React.Component {
    state = {
        products: null,
        totalPrice: 0,
        addCounter: 0,
        purchased: false,
        loading: false,
    }

    componentDidMount() {
        axios.get('https://e-commerce-bdda9.firebaseio.com/products.json')
            .then((response) => {
                this.setState({ products: response.data })
            })
    }

    addProductHandler = (id, title, price) => {

        // Count
        const prevCount = this.state.addCounter
        const updatedCount = prevCount + 1


        const updatedProducts = {
            ...this.state.products,
        }
        updatedProducts[id] = updatedCount

        // Price
        const priceAdd = price
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd

        this.setState({ totalPrice: newPrice, addCounter: updatedCount, products: updatedProducts })
    }

    showModalHandler = () => {
        this.setState({ purchased: true })
    }

    closeModalHandler = () => {
        this.setState({ purchased: false })
    }

    continueModalHandler = () => {
        this.setState({ loading: true })

        const order = {
            products: this.state.products,
            price: this.state.totalPrice,
        }

        axios.post('/orders.json', order)
            .then((response) => {
                this.setState({ loading: false, purchased: false })
            })
            .catch((error) => {
                this.setState({ loading: false, purchased: false })
            })
    }


    render() {
        let order = <Order
            count={this.state.addCounter}
            price={this.state.totalPrice}
            close={this.closeModalHandler}
            add={this.continueModalHandler}
        />

        if (this.state.loading) {
            order = <Successful />
        }

        return (
            <Wrapper>
                <Navbar
                    counter={this.state.addCounter}
                    showModal={this.showModalHandler}
                />
                <Modal show={this.state.purchased} >
                    {order}
                </Modal>
                <Control addProduct={this.addProductHandler} />
            </Wrapper>
        )
    }
}


export default Shopping