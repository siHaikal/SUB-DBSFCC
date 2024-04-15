const tombol = document.getElementById('tombol');
const form = document.getElementById('form');

tombol.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'block';
    tombol.style.display = 'none'
  }
});