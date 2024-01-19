import {APP} from '../../../../../../configs';

export const getBody = (data: {body?: string; placeholders: any}) => {
  const inputs = data.placeholders;

  const defaultBody = `

<body paddingwidth="0" paddingheight="0"
    style="padding-top: 0; text-align: center; padding-bottom: 0; padding-top: 0; padding-bottom: 0; background: #fff; background-repeat: repeat; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased;"
    offset="0" toppadding="0" leftpadding="0">
    <table width="700" border="0" cellspacing="0" cellpadding="0" class="tableContent bgBody" align="center"
        valign="top"
        style='font-family:Arial, Helvetica, sans-serif; margin: auto; max-width: 700px; width:100%; font-weight: 300;'>
        <tr>
            <td align="center" valign="top" width="100%" cellpadding="0" cellspacing="0">
                <table border="0" cellspacing="0" cellpadding="0" bgcolor="#f2e5fc" style=" font-weight: 700;"
                    cellspacing="0" cellspacing="0" width="100%">
                    <tr>
                        <td width="100%" cellpadding="0" cellspacing="0"
                            style="background: #f2e5fc; color: #fff; font-weight: 300; font-size: 18px;">
                            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                <tr>
                                    <td cellpadding="0" cellspacing="0" height="20" style="height:20px"></td>
                                </tr>
                                <tr>
                                    <td cellpadding="0" cellspacing="0" width="100" align="center" valign="top"><img
                                            id="u2480_img" class="img" style="width:112px"
                                            src=${APP.CLOUDFRONT_URL}assets/logo/logo.png>
                                    </td>
                                </tr>
                                <tr>
                                    <td cellpadding="0" cellspacing="0" height="20"
                                        style="height:20px; background: #f2e5fc;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td width="100%" cellpadding="0" cellspacing="0" border="0" height="5px" colspan="3"
                            style="width:100%; height:5px; margin: 0px; padding: 0px; border:0px; outline:0px; background-color: #EE2674; background-image: linear-gradient( to right, #FFFF00 -50%, #EE2674 100% ); padding: 0 40px">
                        </td>
                    </tr>
                    <tr style="margin: 0px; padding: 0px; border: 0px; outline: 0px;">

                    <tr>
                        <td width="100%" align="left" valign="top" style="font-size: 15px; color:#302727; padding: 0 20px;">
                            <br><br>
                            Hi ${inputs.counselorName},
                            <br><br>
                            Congratulations! Your application to work as a career counsellor on Launch My Career has
                            been approved.
                            <br><br>
                            We’ll be in touch shortly with a date and time for your first interview.
                            <br><br>
                            Thanks, 
                            LMC Team
                            <br><br>
                    </tr>
                    <td width="100%" cellpadding="0" cellspacing="0" border="0"
                        style="background: #100726; color: #fff; font-size: 18px; padding: 0 20px; font-weight: 300;">
                        <table border="0" cellspacing="0" cellpadding="0" style="text-align: center;" width="100%">

                            <tr>
                                <td width="100%" height="25px" style="height:25px"></td>

                            </tr>

                            <tr>
                                <td width="100%" align="left" valign="top" style="font-size: 15px; color:#9B9B9B">
                                    You received this mandatory email service announcement to update you about important
                                    changes to your LaunchMyCareer account.
                            </tr>
                            <tr>
                                <td width="100%" align="left" style="font-size: 15px" valign="top">
                                    <br />
                                    <p style="color:#9B9B9B; font-size: 15px; text-align: center; padding: 0 0 5px 0">
                                        &copy; 2021 LaunchMyCareer Pvt. Ltd.</p>
                                    <p style="color:#9B9B9B; font-size: 15px; text-align: center; padding: 0 0 5px 0">
                                        B-121, Sector 67, Noida, Uttar Pradesh 201301, India </p>
                                </td>
                            </tr>
                            <tr>
                                <td width="100%" height="25px" style="height:10px"></td>
                            </tr>
                        </table>
                    </td>
        </tr>
    </table>
    </td>
    </tr>
    </table>
</body>

`;
  return data.body || defaultBody;
};
