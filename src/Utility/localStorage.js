const GetData = () => {
    const getDataStore = localStorage.getItem("data")
    if(getDataStore){
        return JSON.parse(getDataStore)
    }
    return []
}
let have;
const SavedData = (id) => {
    const getDataStore = GetData()
    have = getDataStore.find(storeId=> storeId === id)
    if(!have){
        getDataStore.push(id)
        localStorage.setItem("data",JSON.stringify(getDataStore))
    }
}

export {GetData, SavedData, have}