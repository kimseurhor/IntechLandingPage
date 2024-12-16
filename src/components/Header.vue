<script setup>
import { defineProps, defineEmits } from 'vue';
import logo from '@/assets/img/logo.png';

defineProps({
    callToAction: {
        type: String,
        default: 'Revolutionizing Workplace Efficiency with Smart Technology!'
    },
    quote:{
        type:String,
        default: ''
    },
     
}
);



</script>


<template>
    
    <div class="bg-gradient-to-tl from-slate-50 to-cyan-100 shadow-md">
    <div class="container mx-auto px-4 py-8 flex justify-between items-center">
        <div class="flex items-center ">
            <img v-bind:src="logo" class="h-20 w-20 absolute left-10 ">
        </div>

        <nav class="flex space-x-32">
            <button @click="$emit('scroll-to', '.')" class="bg-opacity-0 text-black hover:text-yellow-900">Home</button>
            <button @click="$emit('scroll-to', 'mivis')" class="bg-opacity-0 text-black hover:text-yellow-900">About us</button>
            <button @click="$emit('scroll-to', 'solutions')" class="bg-opacity-0 text-black hover:text-yellow-900">Products</button>
            <button @click="$emit('scroll-to', 'bottoms')" class="bg-opacity-0 text-black hover:text-yellow-900">Contact</button>
        </nav>


        <button @click="$emit('scroll-to', 'demos')" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg ">
            Get Started
        </button>
    </div>

    <div >
        <div class="flex flex-col md:flex-row items-top container mx-auto px-4 py-16">
            <div class="md:w-1/2 pl-10 mt-5">
                <h2 class="text-7xl font-bold mb-4 ">Revolutionizing <br> Workplace <br> Efficiency with <br> Smart Technology!</h2>
                <p class="text-lg mb-4">{{quote}}</p>
                <button @click="$emit('scroll-to', 'demos')" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg">Learn More</button>
            </div>

            <div class="md:w-1/2 md:ml-8">
                <img src="../assets/img/office.png"  class="w-full h-auto object-none object-center">

            </div>

        </div>
    </div>
    </div>
</template>

            <!-- tried to overlay                <div class="flex flex-col items-center min-h-screen bg-gray-900">
        <div class="relative w-full max-w-7xl h-96 mt-16 bg-red-500 rounded-lg overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75"></div>
        <img src="../assets/img/office.png" alt="Conference Room" class=" object-cover w-full h-full" />
        <div class="absolute bottom-0 left-0 p-4 text-white">
        </div>
        </div> -->