import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import ModalOrder from './components/modal/modalOrder'
import ContactPage from './pages/ContactPage'
import Home from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import VegetablesPage from './pages/Vegetables'

function App() {
	const [modalIsOpen, setIsOpen] = useState(false)
	const [orderList, setOrderList] = useState([])

	function openModal() {
		setIsOpen(true)
	}
	function closeModal() {
		setIsOpen(false)
	}

	function addProductToList(prod) {
		if (orderList.find(option => option.name === prod.name)) {
			handleDeleteProd(prod.name)
			return
		}
		setOrderList([...orderList, prod])
	}
	function handleDeleteProd(name) {
		setOrderList(orderList.filter(option => option.name !== name))
	}

	function handleChangeWeight(name, weight) {
		const updatedItems = orderList.map(item =>
			item.name === name ? { ...item, weightOrder: weight } : item
		)
		setOrderList(updatedItems)
	}
	function order(name) {
		if (orderList.find(prod => prod.name === name)) {
			return true
		}
		return false
	}

	return (
		<>
			<Header openModal={openModal} amount={orderList.length} />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							addProd={addProductToList}
							orderList={order}
							openModal={openModal}
						/>
					}
				/>
				<Route path='/how_it_works' element={<HowItWorksPage />} />
				<Route
					path='/products'
					element={
						<VegetablesPage
							addProd={addProductToList}
							orderList={order}
							openModal={openModal}
						/>
					}
				/>
				<Route path='/contacts' element={<ContactPage />} />
				<Route
					path='*'
					element={
						<Home
							addProd={addProductToList}
							orderList={order}
							openModal={openModal}
						/>
					}
				/>
			</Routes>
			<ModalOrder
				close={closeModal}
				status={modalIsOpen}
				list={orderList}
				handleChangeWeight={handleChangeWeight}
				del={handleDeleteProd}
			/>
			<Footer />
		</>
	)
}

export default App
