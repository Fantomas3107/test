    const showFormButton = document.getElementById('showFormButton');
    const formContainer = document.getElementById('formContainer');
    const content = document.getElementById('content');
    showFormButton.addEventListener('click', () => {
      formContainer.style.display = 'block';
      content.style.filter = 'blur(6px)';
    });
