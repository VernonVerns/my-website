<script setup lang="ts">
    import { TService } from '@/types';
    defineProps<{ service?: TService }>();
</script>
<template>
    <div class="service-item" v-if="service">
        <div class="icon">
            <img :src="`https://myplusplus.com/img/${service.image}`"
                alt="Image for the service">
        </div>
        <div class="text">
            <h4>{{ service.title }}</h4>
            <p>
                {{service.description}}
            </p>
        </div>
    </div>
</template>