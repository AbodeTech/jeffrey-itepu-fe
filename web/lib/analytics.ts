// Safe gtag wrapper — works even if GA hasn't loaded yet

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      eventName: string,
      params?: Record<string, string | number>
    ) => void
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// Predefined events for the app
export const Analytics = {
  // Landing page
  ctaClick: (location: string) =>
    trackEvent('cta_click', { button_location: location }),

  // Registration form
  formStarted: () =>
    trackEvent('form_started'),

  formStepComplete: (step: number, stepName: string) =>
    trackEvent('form_step_complete', { step_number: step, step_name: stepName }),

  formSubmitted: () =>
    trackEvent('form_submitted'),

  // Success page
  successPageView: () =>
    trackEvent('success_page_view'),

  shareClicked: () =>
    trackEvent('share_clicked'),
}
