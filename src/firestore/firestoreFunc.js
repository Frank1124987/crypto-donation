import { firebaseAPP } from "./firestoreInit.js"
import {getFirestore, collection, getDoc, doc, setDoc, addDoc, getDocs} from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {store} from '../store/index.js'
import {NFTStorage, File} from 'nft.storage'

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

    async createPlan(departmentId, planName, image){

        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY0Q2NGNEVlMEM4N2I2QjZlNEFDRTRFQWRiNzg0MGQ0RjUyMjMxMTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzOTU0NDQyNTgwNCwibmFtZSI6ImNyeXB0X2RvbmF0aW9uIn0.iGh9m27-DncOEfMl0vBEy8fPWIKY32eeQLkmatfawbI'
        const client = new NFTStorage({token : apiKey})
        const metadata = await client.store({
            name: planName,
            description: "",
            image: image
        })

        let temp = {}
        temp[planName] = metadata.url

        setDoc(doc(db, "department", departmentId), temp, {merge: true}).then(console.log)
    }

    // createEthereumAddress_Id(uid, address){
        
    // }
}

export default new dbService(db)