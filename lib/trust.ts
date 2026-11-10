export type ConsentedResult = { id: string; treatmentSlug: string; beforeImage: string; afterImage: string; descriptiveAlt: string; consentVerified: boolean; clinicianApproved: boolean; context: string; intervalDescription: string };
export const results: ConsentedResult[] = [];
export type VerifiedReview = { id: string; text: string; sourceUrl: string; attribution: string; permissionVerified: boolean };
export const reviews: VerifiedReview[] = [];
// Publish only records with confirmed consent, source and clinical approval.
