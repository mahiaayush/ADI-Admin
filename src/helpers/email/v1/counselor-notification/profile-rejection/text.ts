// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "<br><br>
    Hi ${inputs.counselorName},
    <br><br>
    We’re sorry, but unfortunately we were not able to approve your Profile to become a counsellor.
    

    <br><br>
    This is because [reasons].
    <br><br>
    Thanks, 
    The LMC Team
    <br><br>"
    
    `;
  return data.text || defaulttext;
};
