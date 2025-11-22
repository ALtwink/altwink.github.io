<script>
  if (!sessionStorage.r) {
    sessionStorage.r = 1;
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) location.reload();
    });
    location.reload();
  }
</script>
