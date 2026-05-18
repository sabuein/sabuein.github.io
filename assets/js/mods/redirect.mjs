export function initRedirect() {
  if (document.body.dataset.page !== 'portfolio-redirect') return;

  const countdownElement = document.querySelector('[data-countdown]');
  const destination = 'https://abuein.dev/portfolio/';
  let remainingSeconds = Number(countdownElement?.textContent || 5);

  const intervalId = window.setInterval(() => {
    remainingSeconds -= 1;

    if (countdownElement && remainingSeconds >= 0) {
      countdownElement.textContent = String(remainingSeconds);
    }

    if (remainingSeconds <= 0) {
      window.clearInterval(intervalId);
      window.location.href = destination;
    }
  }, 1000);
}
