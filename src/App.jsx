import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';

export default function App() {

    const [items, setItems] = useState([])

    const addItem = (item) => setItems([...items, item])

    const deleteItem = (item) => {
        if (window.confirm("Delete This Item?")) {
            setItems(items.filter((current) => current.id !== item.id))
        }
    }


    const editItem = (item) => {
        setItems(
            items.map((current) => (current.id === item.id) ? { ...current, text: item.text } : current)
        );
    };

    const clearItems = () => setItems([])


    return (
        <div className="wrapper bg-dark text-white">
            <Navbar items={items} clearItems={clearItems} />
            <div className="container pt-5">
                <div className="col-12 col-lg-6 mx-auto mt-5 p-5 border border-light rounded">
                    <Form addItem={addItem} />
                    <List items={items} deleteItem={deleteItem} editItem={editItem} />
                </div>
            </div>
        </div>
    )
}