import {Sequelize} from 'sequelize';
import {DB_CONN} from '../../configs';
import {Messenger} from '../../utils';
declare type db_name = 'ACCOUNT' | 'DIAGNOSTIC' | 'LC' | 'SM' | 'CR';
declare type models =
  | 'Entity'
  | 'EntityMeta'
  | 'EntityType'
  | 'Language'
  | 'UserEntityMapper'
  | 'UserAnimal'
  | 'UserSkill'
  | 'MasterSkill'
  | 'UserPathway'
  | 'MasterPathway'
  | 'UserActivity'
  | 'CounselorProfile'
  | 'UserMasterUsr'
  | 'CounselorDocuments'
  | 'UserSessionSchedule'
  | 'UserSessionLog'
  | 'UserAssociateSubscription'
  | 'UserMasterChildUsr'
  | 'CounselorProfileTypeMapper'
  | 'MasterCounselorProfileType'
  | 'UserFeedback'
  | 'SessionActionPlan'
  | 'FeedbackRatingOptionsMapper'
  | 'UserCheckoutSubscription'
  | 'Course'
  | 'CourseMeta'
  | 'Occupation'
  | 'OccupationMeta'
  | 'SessionIgnitorReport'
  | 'MasterPayroll'
  | 'CounselorPayrollMapper'
  | 'CounselorInactiveReason'
  | 'CounselorStatusMapper'
  | 'CounselorLanguage'
  | 'UserMasterPlanagendaMapper';

export abstract class BaseEntity {
  protected db: Sequelize;
  protected model: models;

  constructor(db_name: db_name, model: models) {
    this.db = DB_CONN[db_name];
    this.model = model;
  }

  /**
   * Create record with given data.
   * @param data
   */
  public async create(data: Object): Promise<Object> {
    try {
      // @ts-ignore
      return await this.db[this.model].create(data);
    } catch (error: any) {
      Messenger.error(
        `Error occured while creating entity ${this.model} ${error}`
      );
      throw new Error(error.message);
    }
  }

  // Bulk upsert
  public async bulkUpsert(
    rows: any[],
    updateOnDuplicate: string[]
  ): Promise<any> {
    try {
      let result: any[] = [];
      for (const row of rows) {
        let where = {};
        updateOnDuplicate.forEach((filter: string) => {
          where = {...where, [filter]: row[filter]};
        });

        if (Object.keys(where).length) {
          const exist = await this.findOne({where});
          if (exist) {
            await this.update(row, where);
            result.push({...exist, isUpdatedRecord: true});
          } else {
            const insert = await this.create(row);
            result.push({...insert, isUpdatedRecord: false});
          }
        }
      }
      return result;
    } catch (error: any) {
      Messenger.error(
        `Error occured while upserting entity ${this.model} ${error}`
      );
      throw new Error(error.message);
    }
  }

  /**
   * Create records with given data.
   * @param data
   */
  public async bulkCreate(data: any): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].bulkCreate(data);
    } catch (error: any) {
      Messenger.error(
        `Error occured while creating entities in bulk ${this.model}  ${error}`
      );
      throw new Error(error.message);
    }
  }

  /**
   * Update records with given data.
   * @param data
   */
  public async update(data: any, where: any): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].update(data, {where});
    } catch (error: any) {
      Messenger.error(
        `Error occured while updating entity ${this.model} ${error}`
      );
      throw new Error(error.message);
    }
  }

  /**
   * Find one record with given condition
   * @param where
   */
  public async findOne(options: any): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].findOne(options);
    } catch (error: any) {
      Messenger.error(`Error occured while finding ${this.model} ${error}`);
      throw new Error(error.message);
    }
  }

  /**
   * Find records with given condition
   * @param options
   */
  public async list(options: any): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].findAndCountAll(options);
    } catch (error: any) {
      Messenger.error(
        `Error occured while finding ${this.model} list ${error}`
      );
      throw new Error(error.message);
    }
  }

  /**
   * Find records with given condition
   * @param options
   */
  public async findList(options: any): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].findAll(options);
    } catch (error: any) {
      Messenger.error(
        `Error occured while finding ${this.model} list ${error}`
      );
      throw new Error(error.message);
    }
  }

  public async delete(where: any): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].destroy({where, truncate: false});
    } catch (error: any) {
      Messenger.error(`Error occured while deleting ${this.model} ${error}`);
      throw new Error(error.message);
    }
  }

  public async findByPk(id: number): Promise<any> {
    try {
      // @ts-ignore
      return await this.db[this.model].findByPk(id);
    } catch (error: any) {
      Messenger.error(
        `Error occured while finding entity ${this.model} by primary key ${error}`
      );
      throw new Error(error.message);
    }
  }

  // public async update(model: Model, data: any): Promise<any> {}
  // public async bulkUpdate(model: Model, data: any): Promise<any> {}
  // public async delete(model: Model, data: any): Promise<any> {}
  // public async bulkDelete(model: Model, data: any): Promise<any> {}
  // public async getById(model: Model, data: any): Promise<any> {}
  // public async list(model: Model, data: any): Promise<any> {}
}
