import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [pages, setPages] = useState([]);
  const [editingPage, setEditingPage] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/pages/")
      .then((response) => setPages(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (page) => {
    setEditingPage(page);
  };

  const handleSave = () => {
    axios.put(`http://127.0.0.1:8000/api/pages/${editingPage.id}/`, editingPage)
      .then(() => {
        setPages(pages.map(p => (p.id === editingPage.id ? editingPage : p)));
        setEditingPage(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <strong>{page.title}</strong>
            <button onClick={() => handleEdit(page)}>Edit</button>
          </li>
        ))}
      </ul>

      {editingPage && (
        <div>
          <h3>Edit Page</h3>
          <input
            type="text"
            value={editingPage.title}
            onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
          />
          <textarea
            value={editingPage.content}
            onChange={(e) => setEditingPage({ ...editingPage, content: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
