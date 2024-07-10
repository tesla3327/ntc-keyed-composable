<template>
  <h2 :id="testId">useId</h2>
  <p :id="paragraphId">
    Here, we implement a (bad) version of Nuxt's built-in
    <code>useId</code> to show it in action.
  </p>
  <p>
    (This is actually similar to how it is implemented for
    real.)
  </p>
  <p>
    We can rely on the auto-injected key, or pass in our own
    hardcoded value if we want.
  </p>
</template>

<script setup>
const testId = useId();
const paragraphId = useId('paragraph');
</script>
