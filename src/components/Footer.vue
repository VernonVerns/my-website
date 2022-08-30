<script setup lang="ts">
    import { socialLinks } from '@/data/socialLinks.json';
</script>
<template>
    <div class="footer-part">
        <div class="left-side">
            <img src="../assets/img/white-logo.png" alt="this si company logo">
            <p>&copy; {{new Date().getFullYear()}} mY Plus Plus. <span>All rights reserved.</span></p>
        </div>
        <ul class="list-unstyled right-side">
            <li v-for="socialLink in socialLinks" :key="socialLink.id">
                <a :href="socialLink.url"
                    target="_blank" rel="noopener noreferrer"><i :class="`fa ${socialLink.icon}`"></i>
                </a>
            </li>
        </ul>
    </div>
</template>