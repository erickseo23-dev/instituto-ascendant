/**
 * Kajabi Integration Configuration
 * Instituto Ascendant - Ecosystem Integration
 * 
 * This file handles all Kajabi API connections for:
 * - Course synchronization
 * - Event calendar management
 * - Student enrollment tracking
 * - CRM integration
 * - Email automation
 */

// Kajabi API Configuration
export const KAJABI_CONFIG = {
  // API Endpoints
  API_BASE_URL: import.meta.env.VITE_KAJABI_API_URL || 'https://api.kajabi.com/v1',
  API_KEY: import.meta.env.VITE_KAJABI_API_KEY || '',
  
  // Webhook Configuration
  WEBHOOK_SECRET: import.meta.env.VITE_KAJABI_WEBHOOK_SECRET || '',
  WEBHOOK_EVENTS: {
    STUDENT_ENROLLED: 'student.enrolled',
    STUDENT_COMPLETED: 'student.completed_course',
    PAYMENT_RECEIVED: 'payment.received',
    EMAIL_OPENED: 'email.opened',
    EMAIL_CLICKED: 'email.clicked',
  },
  
  // Product/Course IDs in Kajabi
  PRODUCTS: {
    MEDITACION_ASCENDENTE_NIVEL_1: import.meta.env.VITE_KAJABI_PRODUCT_MA_L1 || '',
    MEDITACION_ASCENDENTE_NIVEL_2: import.meta.env.VITE_KAJABI_PRODUCT_MA_L2 || '',
    MEDITACION_ASCENDENTE_NIVEL_3: import.meta.env.VITE_KAJABI_PRODUCT_MA_L3 || '',
    CERTIFICACION_MEDITACION_ASCENDENTE: import.meta.env.VITE_KAJABI_PRODUCT_CERT_MA || '',
    KS_HEALING_BASICO: import.meta.env.VITE_KAJABI_PRODUCT_KSH_BASIC || '',
    KS_HEALING_AVANZADO: import.meta.env.VITE_KAJABI_PRODUCT_KSH_ADV || '',
    DART_RENOVACION: import.meta.env.VITE_KAJABI_PRODUCT_DART || '',
    GENETICA_SAGRADA: import.meta.env.VITE_KAJABI_PRODUCT_GS || '',
  },
  
  // Email Automation Tags
  EMAIL_TAGS: {
    MEDITACION_ASCENDENTE: 'meditacion-ascendente',
    KS_HEALING: 'ks-healing',
    RETIRO_SAGRADO: 'retiro-sagrado',
    TALLER_GRATUITO: 'taller-gratuito',
    CERTIFICACION: 'certificacion',
    NEWSLETTER: 'newsletter',
    PROSPECT: 'prospect',
    STUDENT: 'student',
    ALUMNI: 'alumni',
  },
  
  // CRM Field Mapping
  CRM_FIELDS: {
    FIRST_NAME: 'first_name',
    LAST_NAME: 'last_name',
    EMAIL: 'email',
    PHONE: 'phone',
    COUNTRY: 'country',
    INTEREST: 'interest',
    PROGRAM: 'program',
    ENROLLMENT_DATE: 'enrollment_date',
    COMPLETION_DATE: 'completion_date',
  },
};

/**
 * Fetch courses from Kajabi API
 */
export async function fetchKajabiCourses() {
  try {
    const response = await fetch(`${KAJABI_CONFIG.API_BASE_URL}/products`, {
      headers: {
        'Authorization': `Bearer ${KAJABI_CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Kajabi API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Kajabi courses:', error);
    return [];
  }
}

/**
 * Fetch events/offerings from Kajabi
 */
export async function fetchKajabiEvents() {
  try {
    const response = await fetch(`${KAJABI_CONFIG.API_BASE_URL}/offerings`, {
      headers: {
        'Authorization': `Bearer ${KAJABI_CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Kajabi API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Kajabi events:', error);
    return [];
  }
}

/**
 * Add contact to Kajabi CRM
 */
export async function addContactToKajabi(contactData: {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  tags?: string[];
}) {
  try {
    const response = await fetch(`${KAJABI_CONFIG.API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KAJABI_CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: contactData.email,
        first_name: contactData.firstName,
        last_name: contactData.lastName,
        phone: contactData.phone,
        tags: contactData.tags || [KAJABI_CONFIG.EMAIL_TAGS.PROSPECT],
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Kajabi API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error adding contact to Kajabi:', error);
    throw error;
  }
}

/**
 * Send email through Kajabi automation
 */
export async function sendKajabiEmail(emailData: {
  to: string;
  templateId: string;
  variables?: Record<string, any>;
}) {
  try {
    const response = await fetch(`${KAJABI_CONFIG.API_BASE_URL}/emails/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KAJABI_CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipient: emailData.to,
        template_id: emailData.templateId,
        variables: emailData.variables || {},
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Kajabi API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending Kajabi email:', error);
    throw error;
  }
}

/**
 * Track event for analytics
 */
export async function trackKajabiEvent(eventData: {
  contactEmail: string;
  eventType: string;
  eventData?: Record<string, any>;
}) {
  try {
    const response = await fetch(`${KAJABI_CONFIG.API_BASE_URL}/analytics/events`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KAJABI_CONFIG.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact_email: eventData.contactEmail,
        event_type: eventData.eventType,
        event_data: eventData.eventData || {},
        timestamp: new Date().toISOString(),
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Kajabi API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error tracking Kajabi event:', error);
    // Don't throw - analytics errors shouldn't break the app
  }
}

export default KAJABI_CONFIG;
