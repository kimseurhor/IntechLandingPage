<script setup>
import { defineProps } from 'vue';

defineProps({
    mision:{
        type:String,
        default:''
    },
    vision:{
        type: String,
        default: ''
    }
    
})

</script>

<template>
<div class="bg-white py-16">
    <div class="container mx-auto px-4">
        

        <div class="bg-cyan-100 shadow-md rounded-lg p-6">
           
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 m-10">
                <div>
                    <img src="../assets/img/mivi.png" alt="About InTech" class="w-full h-auto rounded-lg shadow-md ">
                </div>
                <div class="text-center md:text-left ml-5 mr-20"> 
                    <h2 class="text-5xl font-bold text-left mt-10 mb-12">About InTech</h2>
                    <h3 class="text-3xl font-bold ml-7">Mission</h3>
                    <h4 class="text-xl ml-7">{{ mision }}</h4>
<br>
                    <h3 class="text-3xl font-bold ml-7">Vision</h3>
                    <h4 class="text-xl ml-7">{{ vision }}</h4>
                </div>
            </div>
        </div>
    </div>
</div>
</template>