// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "<br><br>
    Hi ${inputs.counselorName},
    <br><br>
    We’re sorry, but unfortunately you did not passed the training stage to become an LMC counsellor, so we are unable to progress to the next stage with your application.

    <br><br>
    This is because [reasons].
    <br><br>
    Thanks, 
    The LMC Team
    <br><br>"
    
    `;
  return data.text || defaulttext;
};
