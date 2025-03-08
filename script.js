// JavaScript for Smooth Dropdown
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      item.querySelector('.dropdown-menu').classList.toggle('show');
    });
  });
  
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('show');
    });
  });
  