document.addEventListener('click', (event) => {
  const button = event.target.closest('.custom-buy-button__button');
  if (!button) return;

  setTimeout(async () => {
    try {
      const section = document.querySelector('.custom-featured');
      const sectionId = section.dataset.id;
      const sectionUrl = `${window.location.pathname}?sections=${sectionId}`;
      const sectionResponse = await fetch(sectionUrl);
      const sectionData = await sectionResponse.json();
      section.innerHTML = sectionData[sectionId];

    } catch (error) {
      console.error('Помилка:', error);
    }
  }, 500);
});
