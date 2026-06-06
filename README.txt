eBike Battery Manager PRO

Pakiet brandingowy PWA:
- manifest.json
- service-worker.js
- icon-192.svg
- icon-512.svg

Dodaj do <head>:
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#081b4b">

Przed </body>:
<script>
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('service-worker.js');
}
</script>
