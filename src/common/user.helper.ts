import UserMasterModel from '../models/account/user_master_usr';

class UserHelper {
  getUserDetailFromCognitoAttributes(
    UserAttributes: {
      Name: string;
      Value: string;
    }[]
  ) {
    const cognitoUserAttributes: any = UserAttributes.reduce(
      (acc: Object, attribute: {Name: string; Value: String}) => {
        const {Name: name, Value: value} = attribute;
        return {
          ...acc,
          [name]: value
        };
      },
      {}
    );

    let {
      'custom:zoho_customer_id': zohoCustomerId,
      'custom:razorpay_customer_id': razorpayCustomerId,
      given_name: firstName = '',
      family_name: lastName = '',
      email,
      phone_number: phoneNumber
    } = cognitoUserAttributes;

    return {
      zohoCustomerId,
      razorpayCustomerId,
      firstName,
      lastName,
      email,
      phoneNumber
    };
  }

  async validateUserSid(userSid: string): Promise<{
    isValid: boolean;
    message: string;
    user: any;
  }> {
    const user = await UserMasterModel.findByPk(userSid);
    if (!user) {
      throw new Error('No such user found');
    }

    return {
      isValid: true,
      message: '',
      user
    };
  }
}

export default new UserHelper();
