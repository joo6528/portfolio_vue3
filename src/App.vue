<template>
<router-view />

<ThemeToggle />
<QuickMenu :class="{ on: ui.showQuickMenu }" />
<ScrollTop :class="{ on: ui.showScrollTop }" />

<div class="dim" :class="{on: ui.isQuickMenuHover}"></div>
</template>

<script setup>
import { RouterView  } from 'vue-router';
import { useUIStore } from '@/stores/ui';

const ui = useUIStore()

import QuickMenu from '@/components/layout/QuickMenu.vue'
import ThemeToggle from '@/components/layout/ThemeToggle.vue'
import ScrollTop from '@/components/layout/ScrollTop.vue'
</script>
