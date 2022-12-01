
import React, { useState } from "react";
 
const Todo = () => {
 const [showForm, setshowform] = useState(true);
 const [showNew, setshowNew] = useState(true);
 const [setshowDelete] = useState(true);
 const [toggleSubmit] = useState(true);
 const [isEditItem] = useState(null);
 const [showList, setshowList] = useState(true);
 const [deleteMessage] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputDesc, setinputDesc] = useState("");
 const [inputDate, setinputDate] = useState("");
 const [items, setitems] = useState([
   {
     id: "001",
     name: "Default Task",
     desc: "Default Description",
     date: "12-12-2022",
     status: false,
   },
 ]);
 
 //   HANDLING INPUT FIELDS
 const handleInput = (e) => {
   setinputTitle(e.target.value);
 };
 const handleInputdesc = (e) => {
   setinputDesc(e.target.value);
 };
 const handleInputDate = (e) => {
  setinputDate(e.target.value);
};
 //   HANDLING INPUT FIELDS
 
 //   SUBMITTING FORM
 const handleSubmit = (e) => {
   setshowList(true);
   setshowNew(true);
 
   e.preventDefault();
   if (!inputTitle || !inputDesc || !inputDate) {
     alert("fill data");
     showList(false);
   } else if (inputTitle && !toggleSubmit) {
     setitems(
       items.map((elem) => {
         if (elem.id === isEditItem) {
           return { ...elem, name: inputTitle, desc: inputDesc, date: inputDate };
         }
         return elem;
       })
     );
 
     setinputTitle("");
     setinputDesc("");
     setinputDate("");
    //  settoggleSubmit(true);
     setshowform(false);
     setshowDelete(true);
   } else {
     const allinputTitle = {
       id: new Date().getTime().toString(),
       name: inputTitle,
       desc: inputDesc,
       date: inputDate,
     };
     setitems([allinputTitle, ...items]);
     setinputTitle("");
     setinputDesc("");
     setinputDate("");
     setshowform(false);
   }
 };
 //   SUBMITTING FORM
 
 // ADD NEW TASK
 const handleAdd = () => {
   //   alert("hello")
   setshowform(true);
   setshowList(true);
   setshowNew(false);
 };
 // ADD NEW TASK
 return (
   <>
     {showNew ? (
       <div className="container">
         <div className="col-12 text-end">
           <button className="btn btn-primary " onClick={handleAdd}>
             <span className="plusbutton">+</span>
           </button>
         </div>
       </div>
     ) : (
       ""
     )}
 
     {showForm ? (
       <>
         <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
           <div className="row">
             <div className="text-center">
               <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
             </div>
             <form className="col-12 p-2" onSubmit={handleSubmit}>
               <label htmlFor="title" className="my-2">
                 Enter Title
               </label>
               <input type="text" name="title" id="title" placeholder="title" className="w-100 my-1 p-2" onChange={handleInput} value={inputTitle} />
               <label className="my-2" htmlFor="description">
                 Enter Description
               </label>
               <input type="text" name="description" id="description" placeholder="Description" className="w-100 my-1 p-2" onChange={handleInputdesc} value={inputDesc} />
               <label className="my-2" htmlFor="description">
                 Enter Date
               </label>
               <input type="date" name="description" id="description" placeholder="Description" className="w-100 my-1 p-2" onChange={handleInputDate} value={inputDate} />
               <button className="btn btn-primary my-2">Save</button>
             </form>
           </div>
         </div>
       </>
     ) : (
       ""
     )}
 
     {showList ? (
       <div className="container py-2 ">
         {deleteMessage ? (
           <p className="text-center text-danger">Item Deleted Successfully</p>
         ) : (
           ""
         )}
         {items.map((elem, index) => {
           return (
             <div
               className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
               key={elem.id}
             >
               <div className="col-12 d-flex justify-content-between align-items-center">
                 <div>
                   <h4>{elem.name}</h4>
                   <p>{elem.desc}</p>
                   <p>{elem.date}</p>
                 </div>
                   
                 </div>
               </div>
            
           );
         })}
       </div>
     ) : (
       ""
     )}
   </>
 );
};
 
export default Todo;