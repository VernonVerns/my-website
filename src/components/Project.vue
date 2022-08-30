<script setup lang="ts">
    import { TProject } from '@/types';
    defineProps<{ project?: TProject }>();
</script>
<template>
    <div class="single-project" v-if="project">
        <div class="row gx-5 gy-3">
            <div class="col-sm-6">
                 <div class="img-side">
                    <img :src="`https://sam-updated-stack-publics3buckettohostfrontend-1tpcgnlyf2qr9.s3.amazonaws.com/${project.image}`" alt="">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="text-side">
                    <h2 class="mini-title">{{project.name}}</h2>
                    <p>{{project.description}}</p>
                    <p v-if="project.listItems">
                        {{project.listTitle}}
                        <ul>
                            <li v-for="item in project.listItems" :key="item.name">{{item.name}}</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>