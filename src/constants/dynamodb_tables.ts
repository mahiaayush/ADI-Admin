import {AWS} from '../configs';

interface IDYNAMODBTABLES {
  COUNSELOR: string;
  COUNSELOR_SLOT_AVAILABILITY: string;
  COUNSELOR_SLOT_DATE_OVERRIDE: string;
  USER_SCHOOL_SUGGESTION: string;
  USER_ABOUT_CONTENT: string;
  USER_ACHIEVEMENT_CONTENT: string;
  USER_ENDORSEMENT_CONTENT: string;
}
export const DYNAMODB_TABLES: IDYNAMODBTABLES = Object.freeze({
  COUNSELOR: AWS.DYNAMODB_TABLE_PRIFIX + 'lc_counselor_master_activation',
  COUNSELOR_SLOT_AVAILABILITY:
    AWS.DYNAMODB_TABLE_PRIFIX + 'lc_user_counselor_availability',
  COUNSELOR_SLOT_DATE_OVERRIDE:
    AWS.DYNAMODB_TABLE_PRIFIX + 'lc_user_counselor_dateoverride',
  USER_SCHOOL_SUGGESTION:
    AWS.DYNAMODB_TABLE_PRIFIX + 'lc_user_school_suggestion',
  USER_ABOUT_CONTENT: AWS.DYNAMODB_TABLE_PRIFIX + 'pp_user_about_content',
  USER_ACHIEVEMENT_CONTENT:
    AWS.DYNAMODB_TABLE_PRIFIX + 'pp_user_achievemet_content',
  USER_ENDORSEMENT_CONTENT:
    AWS.DYNAMODB_TABLE_PRIFIX + 'pp_user_endorsement_content'
});
