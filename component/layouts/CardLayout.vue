<template>
  <div class="card text-left col-lg-6">
    <div class="card-body">
      <h4 class="card-title">
        <slot name="title"></slot>
      </h4>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {}
</script>