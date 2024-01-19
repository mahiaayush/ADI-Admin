import {
  counselorAcceptanceInterview,
  counselorInterviewRejection,
  counselorInterviewPassed,
  counselorApplicationRejected,
  counselorProfileRejection,
  counselorProfileApproved,
  counselorAvailabilityApproved,
  counselorAvailabilityRejection,
  counselorTrainingFailed,
  counselorTrainingPassed,
  counselorRescheduleRequestDenied,
  counselorRescheduleRequestApproved,
  counselorCancelRequestDenied,
  counselorCancelRequestApproved
} from './counselor-notification';

export const getHtml = (data: {
  activity: string;values: any
}) => {
  switch (data.activity) {
    case 'counselorApplicationRejected':
      return counselorApplicationRejected(data.values);
    case 'counselorAcceptanceInterview':
      return counselorAcceptanceInterview(data.values);
    case 'counselorInterviewRejection':
      return counselorInterviewRejection(data.values);
    case 'counselorInterviewPassed':
      return counselorInterviewPassed(data.values);
    case 'counselorTrainingFailed':
      return counselorTrainingFailed(data.values);
    case 'counselorTrainingPassed':
      return counselorTrainingPassed(data.values);
    case 'counselorProfileApproved':
      return counselorProfileApproved(data.values);
    case 'counselorProfileRejection':
      return counselorProfileRejection(data.values);
    case 'counselorAvailabilityApproved':
      return counselorAvailabilityApproved(data.values);
    case 'counselorAvailabilityRejection':
      return counselorAvailabilityRejection(data.values);
    case 'counselorRescheduleRequestDenied':
      return counselorRescheduleRequestDenied(data.values);
    case 'counselorRescheduleRequestApproved':
      return counselorRescheduleRequestApproved(data.values);
    case 'counselorCancelRequestDenied':
      return counselorCancelRequestDenied(data.values);
    case 'counselorCancelRequestApproved':
      return counselorCancelRequestApproved(data.values);
    default:
      break;
  }
};