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

      await navigator.clipboard.writeText(window.location.href);
      shareButton.textContent = 'Link copied';
      window.setTimeout(() => {
        shareButton.textContent = 'Share';
      }, 1600);
    } catch (error) {
      console.warn('Share failed.', error);
    }
  });
}
