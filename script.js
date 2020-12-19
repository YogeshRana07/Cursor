const cursor = document.querySelector('.cursor');

document.addEventListener("mousemove", e => {
  console.log(e.pageX);
  e.preventDefault();
  cursor.setAttribute("style", "top:"+e.pageY+"px; left: "+e.pageX+"px;")
});

document.addEventListener("click", () =>{
  cursor.classList.add("new");
  setTimeout(()=>{
    cursor.classList.remove("new");
  },500);
});
