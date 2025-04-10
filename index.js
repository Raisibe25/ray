<div>
  <button onclick="toggleAccordion()">Click to Expand</button>
  <div id="accordion" style="display: none;">
    <p>This is detailed information...</p>
  </div>
</div>
<script>
function toggleAccordion() {
  let accordion = document.getElementById("accordion");
  accordion.style.display = accordion.style.display === "none" ? "block" : "none";
}
</script>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
