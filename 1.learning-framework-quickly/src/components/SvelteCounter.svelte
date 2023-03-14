<script>
  let count = 0

  function increaseCount() {
    count = count + 1
  }
</script>

<button on:click={increaseCount}>+1</button>
<div>{count}</div>
