import {createStore} from 'vuex'
import {contract} from '../contract/contract.js'

const store = createStore({
    state () {
        return {
            department : [],
            plan : [],
            user: {
                uId: null,
                ethereumId: null,
                address: null,
                addressInitial: null
            }
        }
    },
    getters: {
        getDepartment(state){
            return state.department
        },
        getDepartmentCount(state){
            console.log("go fuck yourself", state.department)
            return state.department
        }
    },
    mutations: {
        updateDepartment(state, newDepartment){
            state.department.push(newDepartment)
        },
        updatePlan(state, newPlan){
            state.plan.push(newPlan)
        },
        setAddress(state, address){
            state.user.address = address
        },
        setAddressInitial(state, address){
            state.user.addressInitial = address
        },
        setUserUId(state, uid){
            state.user.uId = uid
        },
        setUserEthereumId(state, ethereumId){
            state.user.ethereumId = ethereumId
        },
        clearAllUserId(state){
            state.uId = null,
            state.ethereumId = null,
            state.address = null
        },
        clearDepartment(state){
            state.department = []
        },
        clearPlan(state){
            state.plan = []
        },
    },
    actions: {
        async fetchDepartment({commit}){
            commit("clearDepartment")
            const ids = await contract.methods.getDepartment_ids().call()
            ids.forEach(async id => {
                commit("updateDepartment", await contract.methods.getDepartment(id).call())
            })

        },  
        async fetchPlan({commit}, departmentId){
            commit("clearPlan")
            const names = await contract.methods.getPlan_names(departmentId).call()
            names.forEach(async name => {
                let temp = {}
                temp["plan"] = await contract.methods.getPlan(departmentId, name).call()
                temp["department"] = departmentId
                commit("updatePlan", temp)
            })
        }   
    }
})

export {store}