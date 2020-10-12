export const showPopup = (popupSelector, messageToShow) => {
  const popup = document.querySelector(popupSelector);
  const message = popup.querySelector('#message');

  message.textContent = messageToShow;
  popup.classList.remove('hide');
}

export const hidePopup = (popupSelector) => {
  const popup = document.querySelector(popupSelector);
  popup.classList.add('hide');
}

export const setupPopup = (popupSelector) => {
  const popup = document.querySelector(popupSelector);

  popup.addEventListener('click', e => {
    const isClosingTrigger = e.target === popup || e.target.id === 'close';
    
    if (e.target && isClosingTrigger) {
      hidePopup(popupSelector);
    }
  })
}