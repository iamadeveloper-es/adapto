<script setup lang="ts">
// import { AdpButton, AdpDialog, AdpCard } from '@adapto/adapto-ui';
import { AppButton } from '@adapto/adapto-ui';
// import Button from "primevue/button"


function handleClick(){
  alert('Button clicked dice hola como estas');
}
</script>

<template>
  <main>
    <h1>Home View</h1>
    <AppButton
    label="Adapto Button new"
    :icon="{name: 'search'}"
    radius="lg"
    @clicked="handleClick"/>
    <!-- <Button label="PrimeVue Button" icon="pi pi-search" iconPos="top" class="p-button-danger" @click="handleClick"/> -->
  </main>
</template>
