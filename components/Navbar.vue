<script setup lang="ts">
defineProps<{ navigation: any }>()

const route = useRoute()
</script>

<template>
    <header id="navbar-top" class="sticky top-0 z-[1] -mb-px backdrop-blur border-b border-gray-200 lg:border-0 lg:mb-0 navbar ">
        <div class="flex-none lg:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </label>
        </div>
        <div class="flex-1 px-2 mx-2">
            <a href="/">
                <img src="/logo01.png" alt="logo" class="w-[6rem]" />
            </a>
        </div>
        <div class="flex-none hidden lg:block z-[10]">
            <!-- Navbar menu content here -->
            <ul v-for="item in navigation" class="px-1 menu menu-horizontal">
                <li>
                    <!-- v-if="!item.children" -->
                    <div v-if="route.path === item.href">
                        <NuxtLink :key="item.name" :to=item.href class="text-base text-primary">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                    <div v-else>
                        <NuxtLink :key="item.name" :to=item.href class="text-base text-black">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>