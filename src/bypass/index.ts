import express, { Request, Response } from 'express';
import { Controller, LogisticSchema } from '../modules/v2/logistic';
import { UserSchema } from '../modules/v2/user';
import { BannerSectionController, BannerSectionSchema } from '../modules/v2/wa-global-master-banner-section';
import { globalMasterRoutesController } from '../modules/v2/wa-global-master-routes';
import { globalBlogsVideosController, globalBlogsVideosSchema } from '../modules/v2/wa_global_blogs_videos';
import { globalMasterTestimonialController, globalMasterTestimonialSchema } from '../modules/v2/wa-global-master-testimonial';
import { globalMasterServicesController, globalMasterServicesSchema } from '../modules/v2/wa-global-master-services';

const router = express.Router();

// assign card to new user
router.post(
  '/assign-card',
  LogisticSchema.CreateAssignCardSchema,
  (req: Request, res: Response) => {
    Controller.postAssignCard(req, res);
  }
);

router.post(
  '/reset-password/send-otp',
  UserSchema.ResetPasswordSchema,
  (req: Request, res: Response) => globalMasterRoutesController.resetPassword(req, res)
);

router.post(
  '/reset-password',
  UserSchema.ResetPasswordConfirmSchema,
  (req: Request, res: Response) => globalMasterRoutesController.resetPasswordConfirm(req, res)
);

router.get('/services',
  globalMasterServicesSchema.getServiceSchema,
  (req: Request, res: Response) =>
    globalMasterServicesController.getServices(req, res));

router.get('/stats',
  async (req: Request, res: Response) =>
    globalMasterTestimonialController.getStatsData(req, res)
);
router.get('/services', (req: Request, res: Response) =>
  globalMasterServicesController.getServices(req, res));
router.get(
  '/banner-sections',
  BannerSectionSchema.getBannerSectionsSchema,
  (req: Request, res: Response) =>
    BannerSectionController.getBannersSection(req, res));

router.get('/blogs-videos',
  globalBlogsVideosSchema.PagelimitSchema,
  (req: Request, res: Response) => {
    globalBlogsVideosController.getBlogsVideos(req, res);
  });

router.get('/testimonials',
  globalMasterTestimonialSchema.getTestimonialBySchema,
  (req: Request, res: Response) =>
    globalMasterTestimonialController.getTestimonialData(req, res)
);

export const BPRoutes: any = router;
