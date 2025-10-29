
document.getElementById("editnemess").addEventListener("click", async() => {
  postreqservedit(`/api/todos/edit`); 
});
document.getElementById("createnemess").addEventListener("click", () => {
  postreqservcreate(`/api/todos`);
})
document.getElementById("outputall").addEventListener("click", () => {
  getreqserver(`/api/todos`);
})
document.getElementById("delbyid").addEventListener("click", () => {
  postreqservdelete(`/api/todos/delete`);
})
const getreqserver = async (reqpath) => {
  const res = await fetch(reqpath);
  const data = await res.json();
  await crenderSortedAr(data);
}
const postreqservedit = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id:editbyid.value,
      title: tixtforedit.value,
      completed: mySelectfordit.value
    })
  });
}
const postreqservcreate = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: tixtforcreate.value,
      completed: mySelect.value
    })
  });
}
const postreqservdelete = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "delete",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id:iddel.value
    })
  });
}
async function crenderSortedAr(data) {
  const list = document.querySelector("#output");
  list.textContent = "";
  for (const el of data.arr) {
    render(el);
  }
}
const render = (data) => {
  const list = document.querySelector("#output");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#idishnik").textContent = data.id;
  item.querySelector("#iuthor").textContent = data.title;
  item.querySelector("#tixt").textContent = data.completed;
  item.querySelector("#tiiimestamp").textContent = data.createdAt;
  list.append(item);
}