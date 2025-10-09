const getData=()=>{
    const storedAppStr = localStorage.getItem("app");
    return storedAppStr ? JSON.parse(storedAppStr) : []
}
const addData=(id)=>{
    const storedApp = getData();
    const strId= String(id)
    if(storedApp.includes(strId)){
        alert("App is already installed")
    }
    else{
        storedApp.push(strId)
        localStorage.setItem("app", JSON.stringify(storedApp))
    }
}
const removeData=(id)=>{
    const storedIds=getData();
    const strId= String(id);
    const remove = storedIds.filter(id=>id!==strId)
    localStorage.setItem("app" , JSON.stringify(remove))

}
export {addData , getData , removeData}


