function setTemporaryLabel(button, text, timeout = 1600) {
  const original = button.dataset.originalLabel || button.textContent || 'Share';
  button.dataset.originalLabel = original;
  button.textContent = text;
  window.setTimeout(() => {
    button.textContent = original;
  }, timeout);
}

export function initShare() {
  const shareButton = document.querySelector('[data-share]');
  if (!shareButton) return;

  shareButton.addEventListener('click', async () => {
    const shareData = {
      title: document.title,
      text: 'Check out Salaheddin AbuEin.',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        setTemporaryLabel(shareButton, 'Link copied');
        return;
      }

      window.prompt('Copy this link:', window.location.href);
    } catch (error) {
      console.warn('Share failed.', error);
      setTemporaryLabel(shareButton, 'Share unavailable');
    }
  });
}
