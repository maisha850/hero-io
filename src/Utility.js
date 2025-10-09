const getData=()=>{
    const storedAppStr=localStorage.getItem("app")
    if(storedAppStr){
        const storedApp=JSON.parse(storedAppStr)
        return storedApp
    }
    else{
        return []
    }

}
const addData=(id)=>{
    const storedInstalledApp=getData()
    if(storedInstalledApp.includes(id)){
        alert("App is already Installed")
    }
    else{
        storedInstalledApp.push(id)
        const data=JSON.stringify(storedInstalledApp);
        localStorage.setItem("app",data)
    }

}

const removeData=(id)=>{
    const removeData=getData()
    const remove=removeData.filter(rmv=>rmv.id!==id)
    localStorage.setItem("app",JSON.stringify(remove))
}
export {addData,getData, removeData}