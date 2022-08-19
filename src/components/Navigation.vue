<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    const isDefaultLogo = ref(true);
    let navbar: Element | null;
    function handleScroll(e: Event) {
        if (
            window.scrollY > 50 &&
            !navbar?.className.includes('navigation-bar-bg')
        ) {
            navbar?.classList.add('navigation-bar-bg');
            navbar?.classList.add('shadow');
            isDefaultLogo.value = false;
        } else if (window.scrollY <= 50) {
            navbar?.classList.remove('navigation-bar-bg');
            navbar?.classList.remove('shadow');
            if (isDefaultLogo.value) {
                isDefaultLogo.value = true;
            }
        }
    }

    onMounted(() => {
        navbar = document.querySelector('#navigation_bar');
        console.log(navbar);

        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.addEventListener('scroll', handleScroll);
    });
    </script>
<template>
    <div class="navbar navbar-expand-lg fixed-top" id="navigation_bar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_menu"
                aria-controls="navbar_menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar_menu">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Products</a>
                    </li>
                    <li class="nav-item action-btn">
                        <a class="nav-link border-btn" href="#">Let's Talk</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>