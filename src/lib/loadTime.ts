// lib to calculate page load time

window.addEventListener('load', () => {
  const pageEnd = performance.mark('pageEnd')
  const loadTime = Math.floor(pageEnd.startTime)
  const loadTimeElement = document.getElementById('loadTimeDisplay');
  loadTimeElement.textContent = `Portfolio loaded with Astro & TypeScript stack in ${loadTime} ms`;
})
