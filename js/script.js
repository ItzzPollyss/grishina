document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('followForm');
  
  if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const age = document.getElementById('followerAge').value.trim();
      const username = document.getElementById('followerName').value.trim();
      const emailAddress = document.getElementById('followerEmail').value.trim();

      const errors = [];

      if (!age || isNaN(age) || Number(age) <= 0) errors.push('Введите корректный возраст.');
      if (!username) errors.push('Введите имя.');
      if (!/^\S+@\S+\.\S+$/.test(emailAddress)) errors.push('Введите корректный email.');

      const output = document.getElementById('followResult');
      output.innerHTML = '';

      if (errors.length > 0) {
        output.innerHTML = `<p style="color: red;">${errors.join('<br>')}</p>`;
      } else {
        output.innerHTML = `
          <p style="color: green;">
            ${username}, спасибо, что подписались на нашу рассылку для email: ${emailAddress}
          </p>`;
          orderForm.reset();
      }
    });
  }
// с помощью javascript было сделано плавное увеличение кнопки в форме с рассылкой, а также пр наведении мышкой меняется цвет на синий (в цвет фона)
  const button = document.querySelector('.button2');
  if (button) {
    button.style.transition = 'transform 0.3s ease';
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  }
  
  const heading = document.querySelector('.box2 h2');
  if (heading) {
    heading.style.transition = 'color 0.5s ease';
    heading.addEventListener('mouseenter', () => {
      heading.style.color = '#3b82f6'; 
    });
    heading.addEventListener('mouseleave', () => {
      heading.style.color = ''; 
    });
  }
 });
