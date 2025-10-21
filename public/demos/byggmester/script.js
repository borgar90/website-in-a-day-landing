document.getElementById('kontaktForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Takk for din henvendelse! Vi tar kontakt innen kort tid.');
    this.reset();
});
