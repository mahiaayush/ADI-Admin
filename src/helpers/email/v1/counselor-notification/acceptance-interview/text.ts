// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "<br><br>
    Hi ${inputs.counselorName},
    <br><br>
    Congratulations! Your application to work as a career counsellor on Launch My Career has
    been approved.
    <br><br>
    We’ll be in touch shortly with a date and time for your first interview.
    <br><br>
    Thanks, 
    LMC Team
    <br><br>"
    
    `;
  return data.text || defaulttext;
};
