import {CourseMasterDetailsEntity} from '../modules/v2/course-master-details';
import {MasterPlanEntity} from '../modules/v2/master-plan';
import {globalPlatformOffering} from '../modules/v2/wa_global_platform_offering';

class CourseHelper {
  async getCourseIdUsingPtOfferingId(id: number): Promise<{
    courseId: string;
    ptOfferingType: string;
  }> {
    const ptOfferingDetails = await globalPlatformOffering.getItem({
      where: {
        PT_OFFERING_ID: id
      }
    });

    const {PLAN_PRODUCT_ID: planProductId, PT_OFFERING_TYPE: ptOfferingType} =
      ptOfferingDetails;

    if (ptOfferingType == 'S' || ptOfferingType == 'PL') {
      const plan = await MasterPlanEntity.getItem({
        attributes: ['ZOHOPLAN_ID'],
        where: {
          ZOHOPLAN_ID: planProductId
        }
      });
      const {ZOHOPLAN_ID: zohoPlanId} = plan;
      return {courseId: zohoPlanId, ptOfferingType};
    } else if (ptOfferingType == 'P') {
      const product = await CourseMasterDetailsEntity.getItem({
        where: {COURSE_ID: planProductId}
      });
      const {COURSE_ID: courseId} = product;
      return {courseId, ptOfferingType};
    }

    throw Error(`Invalid pt offering type: ${ptOfferingDetails}`);
  }
}

export default new CourseHelper();
