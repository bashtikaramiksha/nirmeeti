/**
 * Privacy-First Analytics System for Nirmitee Studio
 * Captures key client acquisition conversion signals without logging user PII.
 */

export type AnalyticsEventName =
  | "start_project_click"
  | "view_work_click"
  | "project_view_click"
  | "service_contact_click"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "contact_form_submit"
  | "contact_form_success";

export interface AnalyticsEventPayload {
  serviceId?: string;
  projectId?: string;
  projectType?: string;
  sourceLocation?: string;
  [key: string]: string | number | boolean | undefined;
}

// Disallowed property names to strictly enforce privacy
const RESTRICTED_PII_KEYS = [
  "name",
  "email",
  "phone",
  "message",
  "details",
  "whatsappNumber",
];

/**
 * Track user interactions and conversion milestones
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  properties?: AnalyticsEventPayload
): void {
  // Sanitize properties to prevent accidental PII leakage
  const safeProperties: AnalyticsEventPayload = {};

  if (properties) {
    Object.keys(properties).forEach((key) => {
      if (!RESTRICTED_PII_KEYS.includes(key.toLowerCase())) {
        safeProperties[key] = properties[key];
      }
    });
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, safeProperties);
  }

  // Forward to window dataLayer (e.g. GTM / Google Analytics) if available
  if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      ...safeProperties,
      timestamp: new Date().toISOString(),
    });
  }

  // Forward to Vercel Analytics if present
  if (typeof window !== "undefined" && (window as unknown as { va?: (type: string, data: object) => void }).va) {
    (window as unknown as { va: (type: string, data: object) => void }).va("event", {
      name: eventName,
      data: safeProperties,
    });
  }
}
