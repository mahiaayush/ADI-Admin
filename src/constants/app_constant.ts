import {
  OfflinePaymentType,
  OnlinePaymentType,
  PaymentMode,
  PtOfferingType
} from '../helpers/types/transaction';

type BannerSection = {
  BANNER_IMAGE: string,
  BACKGROUND_IMAGE: string
}

type OurServices = {
  ICON_IMAGE: string,
  BANNER_IMAGE: string,
  HOVER_BANNER_IMAGE: string,
}

type CounselorStatus = {
  ACTIVE: string,
  INACTIVE: string,
  TERMINATED: string,
  ENABLE: string,
  DISABLE: string
}
interface IAppConstant {
  OFFLINE_PAYMENT_TYPE: OfflinePaymentType;
  ONLINE_PAYMENT_TYPE: OnlinePaymentType;
  PAYMENT_MODE: PaymentMode;
  PT_OFFERING_TYPE: PtOfferingType;
  USER_ATTRIBUTE_NAME: string[];
  EMAIL: string;
  PHONE_NUMBER: string;
  ZOHO_CSMP_PLAN_ID: string;
  ZOHO_COMBO_PACKAGE: string;
  PLAN_STATUS: string[];
  BANNER_SECTION: BannerSection;
  OUR_SERVICES: OurServices;
  ALLOW_IMAGE_EXTENSIONS: string[];
  S3_ACL: string;
  SALES_ROUTE_USER_ROLES:string[];
  ALLOWED_IMAGES_OUR_SERVICES: string[];
  COUNSELOR_STATUS: CounselorStatus;
}

export const APP_CONSTANT: IAppConstant = Object.freeze({
  OFFLINE_PAYMENT_TYPE: { CH: 'CASH', C: 'CHEQUE', DD: 'DEMAND DRAFT' },
  ONLINE_PAYMENT_TYPE: { L: 'LINK', QR: 'QR' },
  PAYMENT_MODE: {
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE'
  },
  PT_OFFERING_TYPE: {
    PLAN: 'PL',
    PRODUCT: 'P',
    SUBSCRIPTION: 'S'
  },
  USER_ATTRIBUTE_NAME: ['email', 'phone_number'],
  EMAIL: 'email',
  PHONE_NUMBER: 'phone_number',
  ZOHO_CSMP_PLAN_ID: "PREMIUM-CSMP",
  ZOHO_COMBO_PACKAGE: "Merging",
  PLAN_STATUS: ["A", "U"],
  BANNER_SECTION: {
    BANNER_IMAGE: 'bannerImage',
    BACKGROUND_IMAGE: 'backgroundImage',
  },
  OUR_SERVICES: {
    ICON_IMAGE: 'iconImage',
    BANNER_IMAGE: 'bannerImage',
    HOVER_BANNER_IMAGE: 'hoverBannerImage',
  },
  ALLOW_IMAGE_EXTENSIONS: ['.png', '.jpg', '.jpeg'],
  S3_ACL: 'public-read',
  SALES_ROUTE_USER_ROLES:['SUPER ADMIN', 'Sales'],
  ALLOWED_IMAGES_OUR_SERVICES: ['iconImage', 'bannerImage', 'hoverBannerImage'],
  COUNSELOR_STATUS: {
    ACTIVE: 'A',
    INACTIVE: 'I',
    TERMINATED: 'T',
    ENABLE: 'E',
    DISABLE: 'D'
  }
});