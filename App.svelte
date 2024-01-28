<script lang="ts">
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";

  export let runtime: Runtime;

  const { Buffer } = runtime;
</script>

<pre>{$Buffer}</pre>
