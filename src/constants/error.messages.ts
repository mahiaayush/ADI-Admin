export const ERROR = {
  APP: {
    NOT_FOUND: 'We Cannot Find The Page You Are Looking For.',
    ACCESS_DENIED: 'Access Denied.',
    INVALID: 'Request Faild In Validation.',
    WRONG: 'Something Went Wrong.',
    UNAUTHORIZED: 'Unauthorised Access.'
  },
  ENTITY: {
    LIST: 'Error Occured While Fetchiing Entity List.',
    DETAIL: 'Error Occured While Fetchiing Entity Detail.',
    VERIFY: 'Error Occured While Verifying Entity.',
    INVALID_REQUEST_ID: 'The Given Request Id Is Not A Valid One.',
    ALREADY_VERIFIED: 'The Entity Already Verified.',
    ENTITY_PACKAGE: 'Failed To Fetch Entity Package Data',
    TRANSACTION: 'Transaction Id Already Exists',
    ENTITY_ITEM_MAP: 'Failed To Map Items And Entities',
    ENTITY_ITEM_MAP_DUPLICATE: 'Mapping Already Exists',
    INVALID_PACKAGE: 'Invalid Entity Package Id',
    INVALID_ENTITY_ADMIN: 'No Admin User Mapped To Provided Entity',
    INVALID_ITEM: 'Invalid Item Id',
    ENTITYPACKAGEDATA: 'Failed To Fetch Entity Package Details',
    SEATS_EXHAUSTED: 'You Do Not Have Sufficient Seats To Assign',
    ENTITYPLAN: 'Selected Plan Does Not Exist',
    INVALID_USER: 'Invalid Usersid',
    SUBS_ASSIGNED: 'Subscription Is Already Assigned',
    ENTITYPACKAGE: 'Error Occured While Updating Entity Package Details',
    SESSION: 'No Session Details Found',
    PACKAGE_EXPIRED: 'Selected Package Has Expired',
    INVALID_ENTITYPACKAGE: 'Invalid Entity Package',
    LICENCE_RESTRICTED: 'Adding Licence Is Not Permitted For This Entity Type',
    LICENCE_EXPIRED: 'Selected Licence Is Expired',
    INVALID_ASSOCIATIONID: 'Smassociation Id Is Invalid',
    PACKAGE_ALLOCATED:
      'Selected Entity Package Is Already Allocated To The User',
    INVALID_PLANTYPE: 'Selected Plan Type Is Invalid',
    INVALID_ACTION:
      'Selected Action Is Not Permitted For The Current Entity Type',
    INVALID_ENTITY_PACKAGE_ID:
      'Selected Entity Package Is not assigned to Entity or not exists.'
  },
  ROLE: {
    NOT_FOUND: "Role Doesn't Exists Invalid Role Id"
  },
  USERS: {
    USERNOTFOUND: 'Error In Fetching User Type',
    GLOBAL_SIGN_OUT: 'Error Occured While Globally Signing Out.',
    LIST: 'Error Occured While Fetchiing User List.',
    DETAIL: 'Error Occured While Fetchiing User Detail.',
    ENABLE: 'Error Occured While Enabling User.',
    DISABLE: 'Error Occured While Disabling User.',
    MFA: 'Error Occured While Setting Mfa.',
    RESET_PASSWORD: 'Error Occured While Resetting User Password.',
    CREATE: 'Error Occured While Creating User.',
    ENTITY_ALREADY_LINKED: 'This Entity Have Already Been Linked.',
    INVALID_JOIN_CODE: 'The Given Join Code Is Not Valid.',
    ENTITY_NOT_LINKED: 'The Given Entity Is Not Linked With This User.',
    ASSOCIATION_ID: 'Failed To Find Assoication Id.',
    NOFEEDBACKEXISTS: "Feedbacks Doesn'T Exist",
    TEST_LIST: 'An Error Occures While Fetching Test List From Imocha.',
    INVITE_CANDIDATE: 'An Error Occures While Invite Candidate.',
    FEEDBACK: 'Failed To Fetch Feedback Details.',
    NOFEEDBACK: 'No Feedback Data Found.',
    ACTIVE_USERS: 'No Active User Data Found.',
    INACTIVE_USERS: 'No Inactive User Data Found.',
    USER_EXIST: 'User Already Exists',
    USER_NOT_EXIST: 'User Does Not Exists',
    USER_NOT_BELONG_WITH_REGION:
      'Coupon Does Not Exist, User Region Mapping Does Not Exists.',
    USER_ROLE_NOT_EXIST: 'User Role Mapping Does Not Exists',
    INVALID_ROLE: 'Role Id Is Invalid',
    USER_ROLES_UPDATE: 'Failed To Update User Role',
    SUBSCRIBEID: 'No Subscribe Data Found For The User',
    ASSOCIATIONID: 'No Association Data Found For The User',
    SESSION_LEARNER_DETAILS: 'Failed To Fetch Learner Details.',
    POOL_ID_NOT_EXIST: 'Current Used Pool Id Not Exists.'
  },
  LEARNINGHUB: {
    COURSELIST: 'An Error Occures While Fetching Course List',
    COURSE_ITEM: {
      ORDER_NUMBER: {
        NOT_FOUND: 'No Such Order_Number Record Found'
      }
    }
  },
  GLOBAL: {
    NOT_VALID_USER: 'Sorry! You Are Not A Valid Seller.',
    NOT_VALID_USER_FOR_DEPOSITSLIP:
      'Sorry! You Are Not A Valid User For Deposit Attachment For Given Transactions.',
    CARD_NOT_BELONG_TO_SELLER: 'This Card Is Not Belong To Seller.',
    INVALID_CARD:
      'This Card Is Not Valid, Reasons: Card Not Exist Or Card Is Not Printed Yet Or Card Status Is Not Inactive.',
    CARD_ALREADY_ASSIGNED:
      'This Card Already Assigned To Customer, User Another!',
    PLAN_PRODUCT_NOT_MAPPED:
      'Sorry! Platform Offer Type And Platform Offer Id Not Mapped.',
    CARD_NOT_BELONG: 'Sorry! This Card Does Not Exist.',
    CARD_SELLER: 'No Card Assigned To This Seller.',
    CARD_SOLD: 'Sorry! You Can Not Update Sold Card Status. ',
    COUPON_NOT_BELONG: 'Coupon Does Not Belongs With This User.',
    ITEM_CREATION: 'An Error Occures While Create New Zoho List Items.',
    TAX_ITEM_LIST: 'An Error Occures While Getting Zoho Tax Items List.',
    GETOVERRIDE: 'Failed To Fetch Override Data',
    CREATEOVERRIDE: 'Failed To Create Override Data',
    INVALID_START_DATE_PAST:
      'Start Date Should Be Less Than Or Equal Current Date',
    INVALID_END_DATE_PAST: 'End Date Should Be Less Than Or Equal Current Date',
    INVALID_START_DATE_FUTURE:
      'Start Date Should Be More Than Or Equal Current Date',
    INVALID_END_DATE_FUTURE:
      'End Date Should Be More Than Or Equal Current Date',
    INVALID_DATE_GREATER: 'Start Date Cannot Be Greater Than End Date',
    DELETEOVERRIDE: 'Failed To Delete Override Data',
    INVALID_TIME: 'Invalid Date Or Time',
    GLOBALWORKINGHOURS: 'Failed To Fetch Global Working Hours',
    INVALID_DATE_FUTURE: 'Date Should Be More Than Or Equal Current Date',
    INVALID_DATE_PAST: 'Date Should Be Less Than Or Equal Current Date',
    MINIMUMDURATION: 'End Date Should Be Minimum 30 Days After Start Date',
    DUPLICATEOVERRIDE: 'Override Data Already Exists',
    SESSION_BOOKED:
      'Override Cannot Be Created As Session Is Already Booked On Given Time',
    MASTER_REGION: 'Failed To Add New Region',
    MASTER_REGION_GET: 'Failed To Get Region Data',
    MASTER_REGION_DELETE: 'Failed To Delete Region',
    MASTER_REGION_UPDATE: 'Failed To Update Region',
    MASTER_STATE_UPDATE: 'Failed To Update State',
    UPDATE_NODATA: 'No Data To Update',
    REGION_EXIST: 'Region Already Exists',
    REGION_NOT_EXIST: 'Region Does Not Exists',
    STATE_NOT_EXIST: 'State Does Not Exists',
    MASTER_CITY: 'Failed To Add New City',
    MASTER_CITY_GET: 'Failed To Fetch City Data',
    MASTER_CITY_DELETE: 'Failed To Delete City',
    MASTER_STATE_DELETE: 'Failed To Delete State',
    MASTER_CITY_UPDATE: 'Failed To Update City',
    CITY_EXIST: 'City Already Exists',
    VPA_EXIST: 'Vpa Already Exists',
    VPA_NOT_EXIST: 'Vpa Does Not Exist',
    COUPON_EXIST: 'Coupon Already Exists',
    MASTER_VPA: 'Failed To Create Vpa',
    MASTER_VPA_GET: 'Failed To Fetch Vpa Data',
    MASTER_VPA_DELETE: 'Failed To Delete Vpa',
    MASTER_VPA_UPDATE: 'Failed To Update Vpa',
    MASTER_COUPON: 'Failed To Create Coupon',
    MASTER_COUPON_GET: 'No Coupons Available.',
    MASTER_COUPON_DELETE: 'Failed To Delete Coupon',
    MASTER_COUPON_UPDATE: 'Failed To Update Coupon',
    COUPON_NOT_EXIST: 'Coupon Does Not Exist',
    STATE_EXIST: 'State Already Exists',
    MASTER_STATE: 'Failed To Add New State',
    MASTER_STATE_GET: 'Failed To Fetch State Data',
    USER_VPA_NOT_FOUND: 'Sorry! No Assigned Or Active Vpa Available.',
    COUPON_MAPPED: 'Coupon Already Mapped To A Region',
    MISSING_DATES: 'Please Provide Both Start Date And End Date',
    MASTER_SELLER_GET: 'Failed To Fetch Seller Data',
    MASTER_SELLER_META_GET: 'Failed To Fetch Seller Meta Data',
    SELLER_NOT_EXIST: 'Seller Does Not Exists',
    SALES_META_EXIST: 'Sales Meta Already Exists',
    MASTER_SELLER_META_ADD: 'Failed To Add Seller Meta Data',
    SELLER_META_ADD_NODATA: 'No Seller Meta Data Available to Add',
    META_NOT_EXIST: 'Meta Data Does Not Exists',
    MASTER_SELLER_META_UPDATE: 'Failed to update Seller Meta Data',
    META_UPDATE_INVALID: 'Meta Data Cannot Be Updated',
    REGION_DELETE_INVALID: 'Region Cannot Be Deleted',
    VPA_DELETE_INVALID: 'VPA Cannot Be Deleted',
    COUPON_DELETE_INVALID: 'Coupon Cannot Be Deleted',
    STATE_DELETE_INVALID: 'State Cannot Be Deleted',
    CARDLOT_ALLOCATION_GET: 'Failed To Fetch Card Lot Data',
    NO_CS_MEMBERSHIP: 'No Cs Membership Data Found',
    SELLER_CARD_ALLOCATION: 'Failed to Allocate Cards to Seller',
    PLATFORM_OFFERING_NOT_EXIST: 'Platform Offering Does Not Exists',
    TRANSACTION_DATA_GET: 'Failed To Fetch Transaction Data',
    TRANSACTION_ID_INVALID: 'Invalid Transaction Id',
    TRANSACTION_UPDATE_INVALID: 'Transaction Status Cannot be Updated',
    TRANSACTION_STATUS_UPDATE: 'Failed to Update Transaction Status',
    TRANSACTION_MODE_INVALID:
      'Transaction Status Update Valid Only For Offline Payment Modes',
    MEMBERSHIP_DATA_NOT_EXIST: 'CsMembership Data Not Available'
  },
  COUNSELOR: {
    ALL_ACTION_PLAN: 'No Action Plan Found.',
    NO_LATEST_COUNSELOR_FOR_ACTION_PLAN:
      'This Counselor Is Not Latest Counselor For This Learner.',
    NOT_CONFORM: 'Sorry! This Counselor Is Not Conform Yet.',
    PSQL: 'Invalid Data Found.',
    ITEMID_NOTFOUND:
      'Zoho Plan Or Entity Does Not Exist In The Mapper Of Zoho Items',
    PRIZING: 'An Error Occures While Finding Details.',
    INVALID_BODY_PARAMETERS:
      'Sorry! You Are Using Wrong Itemid And Entitypacakgeid.',
    NO_DUPLICATE_ENTITY_PLAN:
      'Sorry! You Can Not Assign Same Entity And Plan To Counselor More Than One Time.',
    COUNSELOR_ITEM: 'An Error Occures While Saving Details.',
    MOCK_SESSION_ERROR: 'An Error Occures While Scheduling Mock Session.',
    INTERVIEWER_DETAILS:
      'Associated Counselor Interviewer Detail Does Not Exists',
    EXIST_INTERVIEW: 'Associated Counselor Interview Already Exists.',
    EXIST_MOCKSESSION: 'Associated Counselor Mock Session Already Exists.',
    GSUITE_ERROR: 'Invalid Gsuite Configuration.',
    REASONS: 'Unable To Fetch Reason Table',
    NO_MAPPER: 'No Mapper Found For This User.',
    CHANGE_FAILD: 'Error Occured While Changing The Status.',
    NOT_EXISTS: 'Counsellor Profile Does Not Exist.',
    CREATE_ROOM: 'Error Occured While Creating Session',
    UPDATE: 'Error Occured While Counsellor Update.',
    LISTING: 'Failed To Get Listing For All Counsellors.',
    DETAIL: 'An Error Occured While Fetching Counsellor Details.',
    DETAILS: 'The Counsellor Is Not Conform Yet.',
    RUNNING_SESSIONS: 'Error Occured While Retrieving Running Sessions.',
    LANGUAGE: 'Failed To Retrieve Language.',
    LEARNER: 'Failed To Get Learners.',
    RATING: 'Failed To Fetch Counsellor Rating.',
    RATING_ID: 'No Rating Given Against This Counsellor.',
    INVALID_SCHEDULE_ID: 'Invalid Scheduleid',
    ACTION_PLAN_OVERVIEW: 'Failed To Get Action Plan Overview',
    LEARNER_SESSION: 'Failed To Get Learner Sessions',
    AVAILABLE_COUNSELORS: 'Failed To Get Available Counselors.',
    PAYROLL: 'Failed To Get Counselors Payroll List.',
    OCCUPANCY: 'Failed To Get Occupancy.',
    SESSION_NOT_EXISTS: 'Session Details Not Found.',
    ZOHOCONTACTID_NOT_FOUND:
      'Zoho Contact Not Found Of Associated Counsellors .',
    VOIDBILL_ERROR: 'An Error Occured While Void Bill On Zoho.',
    BILLREJECTED: 'An Error Occured While Rejecting Given Bill.',
    PLANTYPE: 'An Error Occured While Upgrade Counselor Tagging.',
    INTERVIEWER_ACTIVE:
      'An Error Occured While Fetching Active Interviewer List',
    INTERVIEWER: 'An Error Occured While Fetching Interviewer Details',
    INTERVIEWER_EXIST: 'Mail Id Or Phone Number Already Exists',
    INTERVIEW_FEEDBACK_EXIST:
      'An Error Occured While Fetching Interview Feedback Details.',
    INTERVIEWER_UPDATE: 'Error Occured While Interviewer Update. ',
    INTERVIEW_FEEDBACK: 'Error Occured While Updating Interview Feedback',
    DOCUMENT_FEEDBACK: 'Please Provide Admin Feedback',
    DOCUMENT_AVAILABLE: 'Application Id Or Document Id Does Not Exist',
    INTERVIEWTITLE: 'Error Occured While Fetching Interview Details',
    PROFILE_TYPE: 'Error Occured While Fetching Profile Type Details',
    PAYROLLUPDATE: 'Error Occured While Updating Payroll Data',
    SCORETRACE: 'Error Occured While Fetching Score Details',
    MASTERITEM: 'Error Occured While Fetching Item Details',
    ENTITYPACKAGE: 'Error Occured While Updating Entity Package Details',
    ENTITYPACKAGEDATA: 'Failed To Fetch Entity Package Details',
    ACTIVEENTITY: 'Failed To Fetch Active Entities',
    INVALIDPLAN: 'Invalid Plan Data',
    ENTITYUSER: 'Failed To Fetch Users For The Entity',
    NOENTITYUSER: 'No User Available For The Entity',
    COMPLETED_SESSION: 'Failed To Fetch Completed Sessions Data',
    SCHEDULED_SESSION: 'Failed To Fetch Scheduled Sessions Data',
    MASTER_ITEM: 'Failed To Update Master Item',
    ENTITYITEMSDATA: 'Failed To Fetch Items Assigned',
    DOCUMENT_DATA: 'Failed To Fetch Document Details',
    PACKAGEUPDATE: 'Failed To Update Package Details',
    ENTITY_ITEM_MAP: 'Failed To Map Items And Entities',
    ENTITIES: 'Failed To Fetch Entities Data',
    SEATS_EXHAUSTED: 'You Do Not Have Sufficient Unused Seats',
    ENTITYPLAN: 'Selected Plan Does Not Exist',
    UNAVAILABLE: 'Counselor Not Available For Selected Slot',
    DATA_UNAVAILABLE: 'No Counselor Found For The Provided Application Id',
    INVALID: 'Invalid Counselor Data',
    ENTITY_ITEM_MAP_DUPLICATE: 'Mapping Already Exists',
    INVALID_ASSOCIATION: 'Invalid Association Data',
    SESSION: 'No Session Details Found',
    SUBS_ASSIGNED: 'Subscription Is Already Assigned',
    INVALID_USER: 'Invalid Usersid',
    PROFILE: 'Profile Data Not Available For The Counselor',
    INACTIVE: 'Selected Counselor Is Not Active',
    NO_COUNSELOR: 'No Counselor Data Found',
    STATUS_UPDATED: 'Counselor Status Has Already Been Updated',
    ITEMS: 'Failed To Fetch Items Mapped With Counselor',
    NO_ITEM_ASSIGNED: 'Sorry No Item And Entity Assigned',
    GENERATE_BILL_ERROR:
      'Sorry, Bill Not Generated, Reasons -> Bill Already Genetaed , Counselor Is Ih , Session Not Completed And Counselor Is Not Assigned Yet. ',
    INTERVIEWER_DELETE: 'Failed To Delete Interviewer Data',
    INTERVIEWER_NOT_EXIST:
      'The Interviewer You Are Trying To Delete Does Not Exist',
    CSP: 'Sorry! Previous Csp Not Available.'
  },

  INVALID: {
    BILLID: 'Invalid Billid.',
    LUHN_ALGO: 'Sorry Card Number Not Pass Validation.'
  },
  SESSION: {
    CANCEL_VALID_SESSION:
      'Sorry! You Are Cancelling A Session Which Is Already Cancelled.',
    SCHEDULEID: 'Session Scheduleid Not Valid.',
    INVALID_BODY_PARAM: 'You Are Giving Invalid Session Or Counselor Details.',
    DETAIL: 'An Error Occured While Fetching Counsellor Details.',
    LEARNER: 'Failed To Get Learners.',
    CANCELED: 'This Session Can Not Be Canceled.',
    INVALIDSESSION: 'Session Data Is Invalid',
    CANCELED_SESSION:
      'Session Has Been Canceled Or Completed or Schedule Id Not Exist.',
    COUNSELOR_UNCHANGED:
      'Selected Counselor Is Already Assigned For This Session',
    SESSION_GROUPS: 'Failed To Fetch Session Groups.',
    NO_SESSION_FOUND_FOR_PROVIDED_COUNSELOR:
      'No Session Found For Provided Counselor And Session Id',
    SESSION_DATE_PASSED: 'Session Date is Passed.'
  },
  WEBHOOK: {
    ROOM_NOT_FOUND: 'Given Room Name Not Exist.',
    ERROR: 'Not Able To Collect Webhook Info.',
    DOWNLOAD_VIDEO: 'An Error Occured While Downloading Video'
  },
  META: {
    SAVE: 'An Error Occured While Saving Meta.',
    FETCH: 'An Error Occured While Fetching Meta.',
    BLANK: 'No Data Found To Add Or Update',
    ISUNCHANGED: 'Data Already Exists'
  },
  INTERNAL_USERS: {
    ROLE: 'Error Creating Role.',
    ROLE_ROUTE_MAPPING: 'Error Mapping Role To Routes.',
    ROLE_EXISTS: 'Role Already Exists.',
    USER_ROLE_MAPPING: 'User Already Assigned To This Role',
    ROLE_DOES_NOT_EXIST: 'Role Does Not Exist'
  },
  WEBADMIN: {
    OFFER_NOT_EXIST: 'Offer Not Exist',
    ALREADY_EXIST: 'Already Exist',
    BANNER_ID_MISSING: 'Banner ids missing',
    BANNER_EXCEEDED: 'You can fetch maximun 20 ids',
    PRIMARY_KEY_EXIST: 'This Id already exists, it should be unique',
    DOES_NOT_EXIST: 'This Id does not exist, Please provide correct Id',
    PRIMARY_KEY_NOT_EXIST: 'Id does not exist',
    SELECT_FILE: 'Please select file',
    TESTMONIAL_IMAGE: `Image is missing please upload image`
  },
  SYSTEM: {
    API: {
      PRIMARY_KEY_NOT_EXIST: 'Id does not exist'
    },
    ROLE: {
      ROLE_NOT_FOUND: 'roleId does not Exist.',
      PRIMARY_KEY_NOT_EXIST: 'Id does not exist',
      ROLE_NOT_ALLOTTED: 'User role not alloted',
      ROLE_NOTHAVE_API_KEYS: 'The role does not have API_KEYS Allocoted.',
      RBAC_NOT_ACCESS: 'RBAC does not allow to access of given role.'
    }
  },
  MULTER_MSG: {
    IMAGE_MSG: 'Only jpeg, jpg, png & gif file extensions are allowed.'
  }
};
