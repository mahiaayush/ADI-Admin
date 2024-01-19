// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "<br><br>
    Hi ${inputs.counselorName},
    <br><br>
    We’re sorry, your availability has not been approved by the LMC Team.

    <br><br>
    This is because [reasons].
    <br><br>
    Thanks, 
    The LMC Team
    <br><br>"
    
    `;
  return data.text || defaulttext;
};
