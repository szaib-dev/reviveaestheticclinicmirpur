export const categories = [
{ name: 'Skin & Facials', phrase: 'A fresh perspective on your skin.', image: 'skin', description: 'Thoughtful care for texture, tone and the everyday feel of your skin.', services: ['HydraFacial','OxyGeneo','Korean Glass Facial','Carboxy Facial','Chemical Peels','Photofacial','Microneedling','Acne Scar Consultation','Pigmentation Consultation','Hollywood Facial'] },
{ name: 'Aesthetic Treatments', phrase: 'Subtle intentions. Individual choices.', image: 'portrait', description: 'Explore considered options with your individual features and preferences in mind.', services: ['Botox','Fillers','Mesotherapy','HIFU','Thread Treatments','Skin Boosters','PRP Face','Skin Exosomes','Face Contouring & Double Chin Reduction'] },
{ name: 'Hair Restoration', phrase: 'Begin with understanding.', image: 'hair', description: 'A consultation-led approach to hair concerns and restoration options.', services: ['Hair PRP','Hair Restoration Consultation','Hair Transplant Consultation','Hair Exosomes'] },
{ name: 'Laser & Corrective Care', phrase: 'Precision starts with a conversation.', image: 'skin', description: 'Discuss your skin, your history and whether a procedure is appropriate.', services: ['Laser Hair Removal','Tattoo Removal','Mole Assessment','Wart Consultation','Skin Tag Consultation','Q-Switch Laser','Carbon Laser'] },
{ name: 'Wellness & Nutrition', phrase: 'Care beyond the surface.', image: 'still', description: 'Practical nutrition conversations built around your life and health needs.', services: ['Weight Management','Dietary Counseling','Diabetes Nutrition','PCOS Nutrition','Weight Gain','Injectable Weight-Loss Treatment'] },
{ name: 'Bridal Preparation', phrase: 'Your moment. Your own rhythm.', image: 'portrait', description: 'Plan ahead with a considered pre-event skincare consultation.', services: ['Bridal Skincare Planning'] },
{ name: 'IV Therapy', phrase: 'Make space for your questions.', image: 'treatment-aesthetic', description: 'Discuss the clinic’s listed IV options, current availability and whether an IV is appropriate for you.', services: ['IV Therapy'] }
];
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
export const services = categories.flatMap(c => c.services.map(name => ({name, slug: slugify(name), category: c.name, description: c.description, image: c.image})));

// Listed on the clinic card. Confirm availability and the exact offering before booking.
export const servicesByEnquiry = [
  'BB Glow',
  'Microblading / Lip Tint',
];
export function serviceCopy(slug: string) {
if(slug === 'acne-scar-consultation') return {
 overview:'Acne care at Revive starts with a consultation in Mirpur, AJK. Describe whether you want help with ongoing breakouts, marks left after breakouts or changes in skin texture. Bring details of your current routine and previous assessments so you can discuss the right starting point.',
 benefit:'You can bring questions about recurring breakouts, persistent marks or scarring without choosing a procedure first. Tell the practitioner which concern affects you most and how it has changed over time. Ask whether your concern is within their scope of practice or needs referral.',
 process:'Before your appointment, make a list of skincare products, medicines and treatments you have already tried. During the consultation, discuss your priorities, the proposed approach, alternatives and follow-up. Confirm the practitioner, consultation fee and any separate treatment costs before making a plan.'
};

if(slug === 'face-contouring-double-chin-reduction') return {
overview:'Ask about face contouring and double chin reduction by lipolytic injections at Revive in Mirpur. A consultation is needed to discuss your concern and whether this option is appropriate.',
benefit:'If you want to discuss facial contours or the area beneath your chin, bring your goals and any previous treatment details. Ask what can realistically be considered for your individual concern.',
process:'Before deciding, confirm the proposed product, intended treatment area, practitioner, alternatives, risks, recovery, follow-up and full cost. The clinic should explain suitability before any injections are agreed.'
};

if(slug === 'hydrafacial') return {overview:'HydraFacial combines cleansing, exfoliation and hydration in a device-based facial. A consultation helps determine whether this approach fits your current skin condition and goals.', benefit:'People exploring a facial for the appearance of dullness, congestion or uneven texture may wish to discuss this option. It is not a substitute for assessment of persistent acne or other skin disease.', process:'Discuss your routine, sensitivities and recent procedures. If suitable, the clinician explains the cleansing, exfoliation and hydration steps and adapts the plan to your skin.'};
if(slug === 'laser-hair-removal') return {overview:'Laser hair removal uses light to target pigment in hair follicles. Treatment aims to reduce hair growth; it does not guarantee complete or permanent removal.',benefit:'Suitability depends on hair pigment, skin tone, the treatment area and the device used. An experienced practitioner should assess these factors before recommending a course.',process:'Review medicines, tanning, skin history and previous reactions. Ask about the device, eye protection, patch testing, preparation and aftercare. Multiple sessions and maintenance may be discussed without promising a fixed number.'};
if(slug === 'hair-prp') return {overview:'Platelet-rich plasma (PRP) uses a prepared portion of your own blood, injected into the scalp. It may be considered for selected patterns of hair loss after diagnosis.',benefit:'Some people with pattern hair loss may benefit, but not every cause of shedding responds. Evidence and protocols vary, and an assessment for underlying causes comes first.',process:'The consultation reviews the pattern and duration of hair loss, medical history and existing treatment. If suitable, blood is drawn, processed and the prepared plasma is injected using appropriate clinical precautions.'};
return {overview:'Explore '+(services.find(s=>s.slug===slug)?.name.toLowerCase() || 'treatment')+' at Revive in Mirpur through an individual consultation. The first step is understanding your concern and deciding whether an intervention is appropriate.',benefit:'People with a relevant concern can discuss their goals, previous treatment and expectations. Suitability is individual; a consultation may recommend an alternative approach or no procedure.',process:'Your practitioner should assess the concern, review your history and explain the proposed technique, alternatives, costs, recovery and risks before consent. Ask which products or devices would be used and who would perform the treatment.'};
}

export const ivOptions = [
  { id: 'skin-lightening', name: 'Skin Lightening', topic: 'Ask what the clinic means by skin lightening and whether your concern would be better assessed as pigmentation first.' },
  { id: 'skin-glow-cocktails', name: 'Skin Glow Cocktails', topic: 'Ask what the clinic offers under this name, what is included and how the practitioner assesses suitability.' },
  { id: 'iv-nad', name: 'IV NAD', topic: 'Ask why the clinic might discuss this option and what evidence, uncertainties and risks apply to your goals.' },
  { id: 'immunity-boosters', name: 'Immunity Boosters', topic: 'Ask what the clinic means by this name and what evidence supports the proposed use.' },
  { id: 'anti-aging-iv-therapy', name: 'Anti-Aging', topic: 'Explain what you want help with and ask whether an IV would be appropriate for that concern.' },
];

export function collectionLinks(service: string) {
  return service === 'IV Therapy'
    ? ivOptions.map(option => ({ label: option.name, href: `/treatments/iv-therapy#${option.id}` }))
    : [{ label: service, href: `/treatments/${slugify(service)}` }];
}
