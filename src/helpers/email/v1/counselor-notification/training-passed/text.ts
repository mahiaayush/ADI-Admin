// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "<br><br>
    Hi ${inputs.counselorName},
    <br><br>
    Great news! You have passed the training stage and can now move on to the next stage of offering one-to-one counselling sessions.
    <br><br>
    Thanks, 
    The LMC Team
    <br><br>"
    
    `;
  return data.text || defaulttext;
};
