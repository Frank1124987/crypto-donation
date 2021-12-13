import { firebaseAPP } from "./firestoreInit.js"
import {getFirestore, collection, getDoc, doc, setDoc, addDoc, getDocs} from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {store} from '../store/index.js'

const db = getFirestore()
// const doc = collection(db, "userAccountToEthereumId")

class dbService{
    constructor(db){
        this.db = db
    }

    readAccount(uid){
        const path = "userAccountToEthereumId/" + uid
        getDoc(doc(db, path)).then((result) => {
            if( result.exists()){
                const data = result.data()
                store.commit("setUserEthereumId", data.ethereumId)
                // store.commit("setAddress", data.addresses.ethereumAddress)
            }
        })
    }

    // whenever an account is create from Auth, create an according ethereumId and store in firestore
    createEthereumId(uid, dataset){
        console.log(uid, dataset)
        setDoc(doc(db, "userAccountToEthereumId", uid), {ethereumId : dataset.ethereumId}, {merge: true} ).then(console.log)
        // setDoc(doc(db, "userAccountToEthereumId/" + uid + "/addresses", dataset.ethereumAddress), {active: true}, {merge: true}).catch(console.log)
    }

    getAllAccount(){
        getDocs(collection(db, "userAccountToEthereumId")).then(result => {
            result.forEach(doc => {
                console.log(doc.id, ", user:", doc.data().ethereumId)
            })
        })
    }
    // createEthereumAddress_Id(uid, address){
        
    // }
}

export default new dbService(db)