// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "<br><br>
    Hi ${inputs.counselorName},
    <br><br>
    Great news! Your application has been approved by the LMC Team.

    <br><br>
    Thanks, 
    The LMC Team
    <br><br>"
    
    `;
  return data.text || defaulttext;
};
