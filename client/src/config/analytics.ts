/**
 * Google Analytics Configuration
 * Instituto Ascendant - Web Analytics
 * 
 * Tracks user behavior, conversions, and engagement
 * across all pages and user interactions
 */

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

/**
 * Initialize Google Analytics
 */
export function initializeAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics not configured. Please set VITE_GA_MEASUREMENT_ID in .env');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    anonymize_ip: true,
  });

  // Attach to window for use throughout app
  (window as any).gtag = gtag;
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
}

/**
 * Track custom event
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData || {});
  }
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName: string, buttonCategory?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    button_category: buttonCategory || 'general',
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent('form_submission', {
    form_name: formName,
    success: success,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track course enrollment
 */
export function trackCourseEnrollment(courseName: string, courseId?: string) {
  trackEvent('course_enrollment', {
    course_name: courseName,
    course_id: courseId || '',
    enrollment_date: new Date().toISOString(),
  });
}

/**
 * Track event registration
 */
export function trackEventRegistration(eventName: string, eventDate?: string) {
  trackEvent('event_registration', {
    event_name: eventName,
    event_date: eventDate || '',
    registration_date: new Date().toISOString(),
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(email?: string) {
  trackEvent('newsletter_signup', {
    email_provided: !!email,
    signup_date: new Date().toISOString(),
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number) {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkText?: string) {
  trackEvent('external_link_click', {
    url: url,
    link_text: linkText || '',
  });
}

/**
 * Track video view
 */
export function trackVideoView(videoTitle: string, videoDuration?: number) {
  trackEvent('video_view', {
    video_title: videoTitle,
    video_duration: videoDuration || 0,
  });
}

/**
 * Set user properties
 */
export function setUserProperties(properties: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('set', properties);
  }
}

/**
 * Track user as student
 */
export function trackUserAsStudent(studentId?: string) {
  setUserProperties({
    user_type: 'student',
    student_id: studentId || '',
  });
}

/**
 * Track user as prospect
 */
export function trackUserAsProspect(source?: string) {
  setUserProperties({
    user_type: 'prospect',
    acquisition_source: source || 'organic',
  });
}

export default {
  initializeAnalytics,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmission,
  trackCourseEnrollment,
  trackEventRegistration,
  trackNewsletterSignup,
  trackScrollDepth,
  trackExternalLink,
  trackVideoView,
  setUserProperties,
  trackUserAsStudent,
  trackUserAsProspect,
};
