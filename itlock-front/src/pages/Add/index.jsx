import React, { useEffect, useState } from "react";
import "./index.scss";
import { AddForm } from "../../components/AddForm";
import { Helmet } from "react-helmet-async";
const Add = () => {
  const [data, setData] = useState(null);
  async function GetFetch() {
    try {
      const res = await fetch("http://localhost:3100/brands");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function DeleteFetch(id) {
    await fetch("http://localhost:3100/brands/" + id, { method: "DELETE" });
    await GetFetch();
  }

  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <>
    <Helmet>
        <title>Add</title>
      </Helmet>
      <section id="addForm">
        <div className="add_form_container">
          <h2>Add Brand</h2>
          <AddForm getfetch={()=>GetFetch()} />
        </div>
      </section>
      <section id="AdminPanel">
        <table>
          <tr>
            <th>Img</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
          {data &&
            data.map((x) => (
              <tr>
                <td>
                  <div class="table-img">
                    <img src={x.img} alt="" />
                  </div>
                </td>
                <td>{x.title}</td>
                <td>{x.category}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      DeleteFetch(x._id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </section>
    </>
  );
};

export default Add;
