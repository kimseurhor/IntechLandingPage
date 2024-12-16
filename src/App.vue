<script setup>
import { ref } from 'vue';
import Headerr from './components/Header.vue';
import Solutions from './components/Solutions.vue';
import Demo from './components/Demo.vue';
import MiVi from './components/MiVi.vue';
import Bottom from './components/Bottom.vue';

const soltionRef = ref(null);
const demoRef = ref(null);
const miviRef = ref(null);

function scrollTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  }
</script>

<template>
    <section id="heads">
        <Headerr quote="Explore our cutting-edge solutions designed to simplify and secure your business operations."
        @scroll-to="scrollTo"
        />
    </section>
    <section id="solutions">
        <Solutions/>
    </section>

    <section id="demos">
        <Demo/>
    </section>
    
    <section id="mivis">
    
        <MiVi mision="To revolutionize workplace efficiency and security through innovative smart technology solutions."
            vision="Be the leading provider of cutting-edge smart technology, creating smarter, more efficient, and secure work environments for businesses of all sizes."/>
    </section>

    <section id="bottoms">
            <Bottom quote='"Empowering smarter workplaces with innovative solutions - InTech."'
            location="Green Arcade 1, 2 and 3, Thmey Village, Chambak Commune, Phnom Srouch District, Kampong Speu Province, Cambodia"
            contact="012 345 678"
            @scroll-to="scrollTo"
            />
    </section>

</template>

