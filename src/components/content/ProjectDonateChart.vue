<template>
    <div class="chart" :style="{width: blockWidth}">
        <div>
            <h3>
                募款日期 : 
                <br>
                {{ date.from }} ~ {{ date.to }}
            </h3>
        </div>
        <div>
            <h3>
                募款進度
            </h3>
            <div class="donation-progress-bar">
                <span class="already" :style="{ width: already + '%' }"></span>
                <span class="togo" :style="{ width: toGo + '%'}" ></span>
            </div>
        </div>
        <div class="block">
            <Button text="我要捐款" :id="id"/>
        </div>
    </div>
</template>

<script>
import {ref, toRefs, watch, watchEffect} from 'vue'
import Button from '../Button.vue'

export default {
    props: {
        date: {
            type: Object,
            required: true
        },
        donation: {
            type: Object,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        blockWidth: {
            type: String,
            default: '25%'
        }
    },
    components:{
        Button
    },
    setup(props) {

        const current = ref(props.donation.current)
        const target = ref(props.donation.target)

        const already = ref( (current.value / target.value) * 100)
        const toGo = ref(((target.value - current.value) / target.value) * 100 )
        
        return {
            already,
            toGo
        }
    }
}
</script>

<style scoped>
.chart {
    display: flex;
    flex-direction: column;
    justify-content: start;

    width: 25%;
    padding: 1% 0 1% 0;
}

h3 {
    margin: 2%;
    margin-left: 0;
}
.block{
    margin : 4%;
    margin-left: 0;
}
.donation-progress-bar{
    display: flex;

}

.already {

    border-top-left-radius: 3px ;
    border-bottom-left-radius: 3px;
 
    height: 7px;
    background-color: red;
}

.togo {
    border-top-right-radius: 3px ;
    border-bottom-right-radius: 3px;
   
    height: 7px;
    background-color: rgb(180, 180, 180);
    margin-left: 1%;

}


</style>