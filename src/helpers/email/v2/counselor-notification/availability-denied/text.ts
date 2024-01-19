// Write html for footer ? What ?

export const getText = (data: {text?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaulttext = `
    "Dear ${(inputs.firstName, inputs.lastName)},
    
    Thank you for taking the time to consider joining Launch My Career as a counsellor.
    
    We regret to inform you that on this occasion we have decided to not further
                            your application.
    
    This decision has been tough as the overall standard of the candidates is
    high.
    <br><br>
    Please see below the feedback from our recruitment panel:
    <br><br>
    ${inputs.adminFeedback}
    We would advise gaining further experience and reapplying in the near future.
    Thanks again for your interests in Launch my Career.
    <br><br>
    Regards,
    LMC Team
    "`;
  return data.text || defaulttext;
};
