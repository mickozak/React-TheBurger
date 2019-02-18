//Nowy obiekt dystrybuuje właściwości starego obiektu a następnie dystrybuuje właściwości
//zaktualizowanych właściwości

export const updateObject = (oldObject, updatedProperties) => {
    return{
        ...oldObject,
        ...updatedProperties
    }
}