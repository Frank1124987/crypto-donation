import {createStore} from 'vuex'
import {contract} from '../contract/contract.js'

const store = createStore({
    state () {
        return {
            department : [],
            plan : [],
            user: {
                id: null,
                address: "0x0dD5265d8c43134b2a6AEA28009B4C969aAdf980"
            }
        }
    },
    getters: {
        getDepartment(state){
            return state.department
        }
    },
    mutations: {
        initialAssign(state, allDepartment){
            state.department = allDepartment
            console.log(state.department)
            
        },
        updateDepartment(state, newDepartment){
            console.log('hi', newDepartment)
            state.department.push(newDepartment)
        },
        updatePlan(state, newPlan){
            state.plan.push(newPlan)
        },
        addUserId(state, address){
            console.log(address)
            state.user.id = address
        },
        clearDepartment(state){
            state.department=[]
        }
    },
    actions: {
        async initialFetch({commit}){
            commit("clearDepartment")
            const ids = await contract.methods.getDepartment_ids().call()
            ids.forEach(async id => {
                commit("updateDepartment", await contract.methods.getDepartment(id).call()
                )
            })
        },  
        updateState({state, commit}){
            return contract.methods.getDepartment_ids().call().then((result) => {
                commit('updateDepartment', result)
                return Promise.resolve(result)
            })
        }
    }
})

export {store}