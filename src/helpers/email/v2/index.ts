import {
  counselorApplicationRejected,
  counselorApplicationApproved,
  counselorInitialScreeningLink,
  counselorScreeningRejected,
  counselorScreeningTestApproved,
  counselorAssessmentScreeningLink,
  adminInitalAssessmentNotification,
  counselorDocumentsApproved,
  counselorDocumentDenied,
  counselorTraningApproved,
  counselorTraningFailed,
  counselorProfileApproved,
  counselorProfileDenied,
  counselorAvailabilityApproved,
  counselorAvailabilityDenied,
  cancelSessionByAdmin,
  adminInitialInterview,
  adminInitialInterviewer,
  adminInitialMocksession,
  counsolerInterviewPassed,
  counsolerInterviewfailed,
  sessionAssigned,
  sessionCanceled,
  counselorMockSession,
  reassignSessionByAdmin,
  terminateByAdmin
} from './counselor-notification';
export const getHtmlV2 = (data: {activity: string; values: any}) => {
  switch (data.activity) {
    case 'counselorApplicationApproved':
      return counselorApplicationApproved(data.values);
    case 'counselorApplicationRejected':
      return counselorApplicationRejected(data.values);
    case 'counselorInitialScreeningLink':
      return counselorInitialScreeningLink(data.values);
    case 'counselorScreeningTestRejected':
      return counselorScreeningRejected(data.values);
    case 'counselorScreeningTestApproved':
      return counselorScreeningTestApproved(data.values);
    case 'adminInitalAssessmentNotification':
      return adminInitalAssessmentNotification(data.values);
    case 'counselorDocumentsApproved':
      return counselorDocumentsApproved(data.values);
    case 'counselorDocumentDenied':
      return counselorDocumentDenied(data.values);
    case 'counselorTraningApproved':
      return counselorTraningApproved(data.values);
    case 'counselorTraningFailed':
      return counselorTraningFailed(data.values);
    case 'counselorAssessmentScreeningLink':
      return counselorAssessmentScreeningLink(data.values);
    case 'counselorProfileApproved':
      return counselorProfileApproved(data.values);
    case 'counselorProfileDenied':
      return counselorProfileDenied(data.values);
    case 'counselorAvailabilityApproved':
      return counselorAvailabilityApproved(data.values);
    case 'counselorAvailabilityDenied':
      return counselorAvailabilityDenied(data.values);
    case 'adminInitialInterview':
      return adminInitialInterview(data.values);
    case 'adminInitialInterviewer':
      return adminInitialInterviewer(data.values);
    case 'counsolerInterviewPassed':
      return counsolerInterviewPassed(data.values);
    case 'counsolerInterviewfailed':
      return counsolerInterviewfailed(data.values);
    case 'adminInitialMocksession':
      return adminInitialMocksession(data.values);
    case 'conselorMocksession':
      return counselorMockSession(data.values);
    case 'cancelSessionByAdmin':
      return cancelSessionByAdmin(data.values);
    case 'reassignSessionByAdmin':
      return reassignSessionByAdmin(data.values);
    case 'terminateByAdmin':
      return terminateByAdmin(data.values);
    case 'sessionAssigned':
      return sessionAssigned(data.values);
    case 'sessionCanceled':
      return sessionCanceled(data.values);
    default:
      break;
  }
};
