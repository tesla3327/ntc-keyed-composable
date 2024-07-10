<template>
  <h2>useKey</h2>
  <p>
    You'll see that we can use the
    <code>useKey</code> composable, and if we don't pass in
    a <code>key</code> ourselves, Nuxt will inject one for
    us.
  </p>
  <p>
    This is the same <code>key</code> that it uses with the
    data-fetching methods. It's based on the filename and
    the line number.
  </p>
</template>

<script setup>
// The key is a hash based on the file and line number
useKey();

// However, if we provide our own key, it will be used instead
useKey('Custom Key');

// This one will create a different key because it's in a different location
// in this file.
useKey();
</script>
