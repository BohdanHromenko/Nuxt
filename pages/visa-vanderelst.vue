<template>
  <div class="tm-row">
    <div class="tm-col-left"></div>
    <main class="tm-col-right">
      <section class="tm-content">
        <h2 class="mb-5 tm-content-title">{{ $t('visa_vanderelst') }}</h2>
        <hr class="mb-4">
        <div v-html="$t('visa_vanderelst_text')"></div>
        <!--        <hr class="mb-5">-->
        <!--        <a href="about.html" class="btn btn-primary">Continue...</a>-->
      </section>
    </main>
  </div>
</template>

<script>
export default {
name: "visa-vanderelst"
}
</script>

<style scoped>

</style>
