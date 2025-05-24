
<script>
document.addEventListener("DOMContentLoaded", function () {
  // Track clicks on city cards
  document.querySelectorAll('.card-preview').forEach(card => {
    card.addEventListener('click', () => {
      const cityName = card.innerText.trim();
      gtag('event', 'click_city_card', {
        'event_category': 'Navigation',
        'event_label': cityName
      });
    });
  });

  // Track continent tab clicks
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const region = tab.innerText.trim();
      gtag('event', 'click_continent_tab', {
        'event_category': 'Navigation',
        'event_label': region
      });
    });
  });

  // Track "Suggest a destination" button click
  const suggestBtn = document.querySelector('a[href*="forms.gle"], a[href*="docs.google.com/forms"]');
  if (suggestBtn) {
    suggestBtn.addEventListener('click', () => {
      gtag('event', 'click_suggest_destination', {
        'event_category': 'Engagement',
        'event_label': 'Suggest Button'
      });
    });
  }

  // Track share button clicks
  const shareMap = {
    'whatsapp': 'share_whatsapp',
    'telegram': 'share_telegram',
    'facebook': 'share_facebook',
    'facebook-messenger': 'share_messenger',
    'twitter': 'share_twitter',
    'instagram-new': 'share_instagram_copy',
    'reddit': 'share_reddit',
    'linkedin': 'share_linkedin',
    'apple-mail': 'share_email',
    'copy-link': 'share_copy_link'
  };

  document.querySelectorAll('footer a img').forEach(img => {
    const alt = img.getAttribute('alt');
    for (const key in shareMap) {
      if (alt && alt.toLowerCase().includes(key)) {
        img.parentElement.addEventListener('click', () => {
          gtag('event', shareMap[key], {
            'event_category': 'Share',
            'event_label': key
          });
        });
      }
    }
  });

  // Track support click
  const supportBtn = document.querySelector('a[href*="ko-fi"], a[href*="buymeacoffee"]');
  if (supportBtn) {
    supportBtn.addEventListener('click', () => {
      gtag('event', 'click_support_project', {
        'event_category': 'Support',
        'event_label': 'Support Button'
      });
    });
  }

  // Track early access clicks (future feature)
  const earlyAccessBtn = document.querySelector('a[href*="early-access"], a[href*="payhip"]');
  if (earlyAccessBtn) {
    earlyAccessBtn.addEventListener('click', () => {
      gtag('event', 'click_early_access', {
        'event_category': 'Support',
        'event_label': 'Early Access'
      });
    });
  }

  // Track session duration on city cards (basic)
  if (window.location.pathname.includes("/cards/")) {
    setTimeout(() => {
      gtag('event', 'time_on_city_card', {
        'event_category': 'Engagement',
        'event_label': document.title
      });
    }, 10000); // 10 seconds viewed
  }
});
</script>
