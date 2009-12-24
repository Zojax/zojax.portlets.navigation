/* zrt-replace: "appUrl" tal"request/getApplicationURL" */
/* zrt-replace: "currUrl" tal"python:request.URL.get(-1) or request.getURL()" */
<script type="text/javascript">
  function onload(){
    loadtree('appUrl/', 'currUrl/');
  };

  if (window.addEventListener)
      window.addEventListener("load", onload, false);
  if (window.attachEvent)
      window.attachEvent("onload", onload)
</script>
