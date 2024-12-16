<script setup> 
import { defineProps } from 'vue';

defineProps({
    quote:{
        type:String,
        default:""
    },
    location:{
        type:String,
        default:""
    },
    contact:{
        type:Number,
        default:0
    }
    }
)
</script>

<template>
    <div class="bg-yellow-400 py-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white ml-8">
            <div class="text-center md:text-left">
                <h1 class="text-4xl leading-normal font-bold ml-8 mt-8">{{ quote }}</h1>
            </div>
            <div class="ml-20">
                <h3 class="text-lg font-bold mb-4 ">Quick Links</h3>
                <div class="flex flex-col mr-72 space-y-3">
                    <button @click="$emit('scroll-to','heads')" class="hover:underline">Home</button>
                    <button @click="$emit('scroll-to', 'solutions')" class="hover:underline">Products</button>
                    <button @click="$emit('scroll-to', 'mivis')" class="hover:underline">About Us</button>
                    <button @click="$emit('scroll-to','.')" class="hover:underline">Contact</button>
                </div>
            </div>
            <div class="mr-16">
                <h3 class="text-lg font-bold mb-4 ">Contact Us</h3>
                <p>{{ location }}</p><br>
                <p>{{ contact }}</p>
                <div class="w-full h-auto py-8 flex items-center  gap-2 flex-wrap">
                <a href="https://telegram.org/" class="p-2 rounded-full flex items-center border border-white justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                    <img src="../assets/img/telegram.png" width="24" height="24" >
                    </img>
                </a>

                <a href="https://www.instagram.com/" class="p-2 rounded-full flex items-center border border-white justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                    <img src="../assets/img/ig.png" width="28" height='28'>
                    </img>
                </a>

                <a href="https://www.facebook.com" class="p-2 rounded-full flex items-center border border-white justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                    <img src="../assets/img/facebook.png" width="28" height="28" >
                    </img>
                 </a>

                <a href="https://x.com/" class="p-2 rounded-full flex items-center border border-white justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
                    <img src="../assets/img/x.png" width="28" height="28" >
                
                    </img>
                </a>
            
            </div>
            </div>

        </div>

        <div class="text-center mt-8">
            <p>&copy; 2023 InTech. All Rights Reserved.</p>
        </div>
    </div>
</div>
</template>