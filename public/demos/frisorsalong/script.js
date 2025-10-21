document.getElementById('bestillForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Takk for din bestilling! Vi bekrefter time på e-post.');
    this.reset();
});
