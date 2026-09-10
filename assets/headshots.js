const dialog = document.querySelector('.sp-lightbox');
const preview = dialog.querySelector('img');
document.querySelectorAll('.sp-gallery button').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    preview.src = image.getAttribute('src').replace('-960.webp', '-1440.webp');
    preview.alt = image.alt;
    dialog.showModal();
  });
});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
document.querySelectorAll('.sp-service a').forEach((link, index) => {
  link.addEventListener('click', () => {
    document.getElementById('hs-session').selectedIndex = index;
  });
});
