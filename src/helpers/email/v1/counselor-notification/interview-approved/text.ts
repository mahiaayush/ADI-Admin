// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    
  "Hi ${inputs.counselorName},
  <br><br>
  Thanks again for attending your interview with us. Great news! We'd love for you to work with us, so want to move on to the next stage of the application process. 

  <br><br>
  To get started, we’ll need the following documents from you:
  <br>
  <br>
  ${inputs.adminFeedback}
  <br>
  <br>
  Thanks,
  LMC Team"`;
  return data.text || defaulttext;
};
