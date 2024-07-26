import { useState } from "react";

export default function List({ items, deleteItem, editItem }) {

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEditClick = (item) => {
        setEditId(item.id);
        setEditText(item.text);
    };

    const handleSaveClick = (id) => {
        editItem({ id, text: editText });
        setEditId(null);
    };

    if (items.length === 0) return (
        <p>Nothing In My Todo List</p>
    )

    return (
        <ul className="list-group mt-5 rounded-0">
            {items.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                    {editId === item.id ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="edit-input"
                        />
                    ) : (
                        <span>{item.text}</span>
                    )}
                    <div>
                        {editId === item.id ? (
                            <button
                                className="btn btn-success me-2"
                                onClick={() => handleSaveClick(item.id)}
                            >
                                Save
                            </button>
                        ) : (
                            <i
                                className="bi bi-pencil-square text-warning fs-5 pointer me-3"
                                onClick={() => handleEditClick(item)}
                            ></i>
                        )}
                        <i
                            className="bi bi-trash text-danger fs-5 pointer"
                            onClick={() => deleteItem(item)}
                        ></i>
                    </div>
                </li>
            ))}
        </ul>
    )
}