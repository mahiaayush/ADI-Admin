// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
  <br><br>
   "Hi ${inputs.counselorName},
  <br><br>
  We’re sorry, but unfortunately you did not pass the interview stage to become an LMC
  counsellor, so we are unable to progress to the next stage with your application.
  <br><br>
  If you’d like more information, you can get in touch with us [here].
  <br>
  <br>
  Thanks,
  LMC Team"
    `;
  return data.text || defaulttext;
};
