<script setup>
  const cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]
</script>

<template>
  <h1 class="text-3xl font-bold underline m-4">
    Hello world!
  </h1>
  <ul class="m-4">
    <li v-for="(cat , i) in cats">
      <a target="_blank" href="https://www.youtube.com/watch?v={{cat.id}}">
        {{i + 1}}: {{cat.name}}
      </a>
    </li>
  </ul>
</template>
