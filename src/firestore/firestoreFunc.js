import { firebaseAPP } from "./firestoreInit.js"
import {getFirestore, collection, getDoc, doc, setDoc, addDoc, getDocs} from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {store} from '../store/index.js'
import {NFTStorage, File} from 'nft.storage'

const db = getFirestore()
// const doc = collection(db, "userAccountToEthereumId")

export const readAccount = (uid) => {
    const path = "userAccountToEthereumId/" + uid
    getDoc(doc(db, path)).then((result) => {
        if( result.exists()){
            const data = result.data()
            store.commit("setUserUId", uid)
            store.commit("setUserEthereumId", data.ethereumId)
            store.commit("setAddressInitial", data.addressInitial)
        }
    })
}

    // whenever an account is create from Auth, create an according ethereumId and store in firestore
export const createUserProfile = (uid, dataset) => {
    setDoc(doc(db, "userAccountToEthereumId", uid), dataset, {merge: true} ).then(console.log)
    // setDoc(doc(db, "userAccountToEthereumId/" + uid + "/addresses", dataset.ethereumAddress), {active: true}, {merge: true}).catch(console.log)
}

export const readAllAccount = () => {
    getDocs(collection(db, "userAccountToEthereumId")).then(result => {
        result.forEach(doc => {
            console.log(doc.id, ", user:", doc.data().ethereumId)
        })
    })
}
export const readPlanImage = async (departmentId, planName) => {
    const path = "department/" + departmentId
    const result = await getDoc(doc(db, path))
    if( result.exists()){
        const data = result.data()
        return data[planName]
    }else{
        return Promise.reject("plan doest not exist")
    }
}

export const createPlan = async (departmentId, planName, image) => {

    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY0Q2NGNEVlMEM4N2I2QjZlNEFDRTRFQWRiNzg0MGQ0RjUyMjMxMTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzOTU0NDQyNTgwNCwibmFtZSI6ImNyeXB0X2RvbmF0aW9uIn0.iGh9m27-DncOEfMl0vBEy8fPWIKY32eeQLkmatfawbI'
    const client = new NFTStorage({token : apiKey})
    const metadata = await client.store({
        name: planName,
        description: "",
        image: image
    })

    console.log(metadata)
    let temp = {}
    temp[planName] = "https://ipfs.io/ipfs" + metadata.data.image.href.substring(6)
    setDoc(doc(db, "department", departmentId), temp, {merge: true}).then(console.log)
}



