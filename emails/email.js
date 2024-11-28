export const newLeadEmailTemplate = (lead) => {
  return `
    <h2>New Lead Notification</h2>
    <p>A new lead has been added to the system:</p>
    <ul>
      <li><strong>Name:</strong> ${lead.name}</li>
      <li><strong>Email:</strong> ${lead.email || "Not provided"}</li>
      <li><strong>Phone:</strong> ${lead.phone}</li>
      <li><strong>Property Type:</strong> ${
        lead.property_type || "Not specified"
      }</li>
      <li><strong>Transaction Type:</strong> ${
        lead.transaction_type || "Not specified"
      }</li>
      <li><strong>Budget Range:</strong> ${
        lead.budget_range || "Not specified"
      }</li>
      <li><strong>Location:</strong> ${lead.location || "Not specified"}</li>
      <li><strong>Source:</strong> ${lead.source || "website"}</li>
      <li><strong>Status:</strong> ${lead.status || "NEW"}</li>
      <li><strong>Preferred Contact Time:</strong> ${
        lead.preferred_contact_time || "Not specified"
      }</li>
      <li><strong>Lead Score:</strong> ${lead.lead_score || "Not assigned"}</li>
      <li><strong>Notes:</strong> ${lead.notes || "No notes"}</li>
    </ul>
  `;
};
