require('dotenv').config();
import express, {Express, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {APP, CORS, DB_CONN} from './configs';
import {Messenger} from './utils';
import {Routes} from './routes';
import {BPRoutes} from './bypass';
import {WebhookRoutes} from './routes/web-hook-routes';
import {
  ACCOUNT_MODELS,
  CR_MODELS,
  DIAGNOSTIC_MODELS,
  LC_MODELS,
  LH_MODELS,
  SM_MODELS,
  WEB_ADMIN_MODELS,
  SA_MODELS
} from './models';
import {AUTH, ErrorHandler, secureHeaders} from './middlewares';
import 'reflect-metadata';
import * as swagger from 'swagger-express-ts';
import path from 'path';
import {ModifiedResponse} from './utils';

class App {
  private static instance: App;

  private app: Express;

  /**
   * Initialize class
   */
  private constructor() {
    this.app = express();
  }

  /**
   * Get class object
   */
  static getInstance(): App {
    return App.instance || (App.instance = new App());
  }

  public async boot() {
    try {
      await this.connectToAccountDb();
      await this.addAccountDBModels();
      await this.connectToDiagnosticDb();
      await this.addDiagnosticDBModels();
      await this.connectToLCDb();
      await this.addLCDBModels();
      await this.connectToSMDb();
      await this.addSMDBModels();
      await this.connectToCRDb();
      await this.addCRDBModels();
      await this.connectToLHDb();
      await this.addLHModels();
      await this.connectToWebAdmin();
      await this.addWebAdminModels();
      await this.connectToStudyAbroad();
      await this.addStudyAbroadModels();
      await this.addMiddleWares();
      // add here for Bypass Router
      await this.bypassRouter();
      await this.addWebhookRoutes();
      await this.authenticate();
      await this.addSwagger();
      await this.addRoutes();
      await this.handleBadRequest();
      await this.errorHandler();
      await this.start();
    } catch (error: any) {
      Messenger.error(
        `Error occured while booting application with error ${error}`
      );
    }
  }

  /**
   * * Authentation middleware
   */
  private async authenticate() {
    if (APP.AUTH_REQUEST === undefined || APP.AUTH_REQUEST === 'yes') {
      this.app.use(await AUTH.auth());
    }
  }

  /**
   * Connect to account database
   */
  private async connectToAccountDb() {
    try {
      await DB_CONN.ACCOUNT.authenticate();
      Messenger.success(`Connected to account database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to account database! ${error}`
      );
    }
  }

  /**
   * Sync account database models
   */
  private async addAccountDBModels() {
    try {
      for (let Model of Object.values(ACCOUNT_MODELS)) {
        // @ts-ignore
        DB_CONN.ACCOUNT[Model.name] = Model;
      }
      Messenger.success(`All account models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding account models ${error}`);
    }
  }

  /**
   * Connect to diagnostic database
   */
  private async connectToDiagnosticDb() {
    try {
      await DB_CONN.DIAGNOSTIC.authenticate();
      Messenger.success(`Connected to diagnostic database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to diagnostic database! ${error}`
      );
    }
  }

  /**
   * Sync diagnostic database models
   */
  private async addDiagnosticDBModels() {
    try {
      for (let Model of Object.values(DIAGNOSTIC_MODELS)) {
        // @ts-ignore
        DB_CONN.DIAGNOSTIC[Model.name] = Model;
      }
      Messenger.success(`All diagnostic models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding diagnostic models ${error}`);
    }
  }

  /**
   * Sync LC database
   */
  private async connectToLCDb() {
    try {
      await DB_CONN.LC.authenticate();
      Messenger.success(`Connected to LC database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to LC database! ${error}`
      );
    }
  }

  /**
   * Sync LC database models
   */
  private async addLCDBModels() {
    try {
      for (let Model of Object.values(LC_MODELS)) {
        // @ts-ignore
        DB_CONN.LC[Model.name] = Model;
      }
      Messenger.success(`All LC models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding LC models ${error}`);
    }
  }

  /**
   * Sync SM database
   */
  private async connectToSMDb() {
    try {
      await DB_CONN.SM.authenticate();
      Messenger.success(`Connected to SM database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to SM database! ${error}`
      );
    }
  }

  /**
   * Sync SM database models
   */
  private async addSMDBModels() {
    try {
      for (let Model of Object.values(SM_MODELS)) {
        // @ts-ignore
        DB_CONN.SM[Model.name] = Model;
      }
      Messenger.success(`All SM models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding SM models ${error}`);
    }
  }

  /**
   * Sync SM database
   */
  private async connectToCRDb() {
    try {
      await DB_CONN.CR.authenticate();
      Messenger.success(`Connected to career database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to career database! ${error}`
      );
    }
  }

  /**
   * Sync SM database models
   */
  private async addCRDBModels() {
    try {
      for (let Model of Object.values(CR_MODELS)) {
        // @ts-ignore
        DB_CONN.CR[Model.name] = Model;
      }
      Messenger.success(`All career models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding career models ${error}`);
    }
  }

  /**
   * Sync Learninhub database
   */
  private async connectToLHDb() {
    try {
      await DB_CONN.LH.authenticate();
      Messenger.success(`Connected to Learninghub database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to Learninghub database! ${error}`
      );
    }
  }

  /**
   * Sync Web Admin Database Model
   */
  private async addLHModels() {
    try {
      for (let Model of Object.values(LH_MODELS)) {
        // @ts-ignore
        DB_CONN.LH[Model.name] = Model;
      }
      Messenger.success(`All Learninghub models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding Learninghub models ${error}`);
    }
  }

  /**
   * Sync Web admin database
   */
  private async connectToWebAdmin() {
    try {
      await DB_CONN.WEB_ADMIN.authenticate();
      Messenger.success(`Connected to Web Admin database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to Web Admin database! ${error}`
      );
    }
  }

  /**
   * Sync LH Database Model
   */
  private async addWebAdminModels() {
    try {
      for (let Model of Object.values(WEB_ADMIN_MODELS)) {
        // @ts-ignore
        DB_CONN.WEB_ADMIN[Model.name] = Model;
      }
      Messenger.success(`All Web Admin models added!`);
    } catch (error: any) {
      Messenger.error(`Error occured while adding Web Admin models ${error}`);
    }
  }

  /**
   * Sync Web admin database
   */
  private async connectToStudyAbroad() {
    try {
      await DB_CONN.SA.authenticate();
      Messenger.success(`Connected to Study Abroad database!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while Connecting to Study Abroad database! ${error}`
      );
    }
  }

  /**
   * Sync LH Database Model
   */
  private async addStudyAbroadModels() {
    try {
      for (let Model of Object.values(SA_MODELS)) {
        // @ts-ignore
        DB_CONN.SA[Model.name] = Model;
      }
      Messenger.success(`All Study Abroad models added!`);
    } catch (error: any) {
      Messenger.error(
        `Error occured while adding Study Abroad models ${error}`
      );
    }
  }

  /**
   * Add middlewares
   */
  private async addMiddleWares() {
    try {
      // CORS middleware
      this.app.use(cors(CORS));
      // parse application/json
      this.app.use(bodyParser.json({limit: '50mb'}));
      // parse application/x-www-form-urlencoded
      this.app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
      // Add headers secure middleware
      secureHeaders(this.app);
      Messenger.success('Middlewares added!');
    } catch (error: any) {
      Messenger.error('Error occured while ading middlewares!');
    }
  }

  /**
   * Add swagger
   */
  private async addSwagger() {
    try {
      require('./entities/v1');
      this.app.use(
        '/api-docs',
        express.static(path.join(__dirname, 'swagger'))
      );
      this.app.use(
        '/api-docs/swagger/assets',
        express.static('node_modules/swagger-ui-dist')
      );
      this.app.use(
        swagger.express({
          definition: {
            info: {
              title: 'Launch My Career Admin APIs',
              version: '1.0'
            },
            schemes: ['http', 'https'],
            basePath: '/api/v1',
            consumes: ['application/json'],
            produces: ['application/json']
          }
        })
      );
      Messenger.success('Swagger added!');
    } catch (error: any) {
      Messenger.error('Error occured while adding swagger!');
    }
  }

  private async bypassRouter() {
    try {
      /**
       * These routes are required for Security tools navigation
       * They will not be exposed anyway from the API Gateway.
       * Only required for pen testing tools assessment
       */
      // @ts-ignore
      this.app.get('/', (req, res) =>
        res.send(
          '<center><p><h3>LaunchMyCareer</h3></p><p><h3>Welcome to LMC Admin Service</h3></p></center>'
        )
      );
      // @ts-ignore
      this.app.get('/api', (req, res) =>
        res.send(
          '<center><p><h3>LaunchMyCareer</h3></p><p><h3>Welcome to LMC Admin Service</h3></p></center>'
        )
      );
      // @ts-ignore
      this.app.get('/api/v1', (req, res) =>
        res.send(
          '<center><p><h3>LaunchMyCareer</h3></p><p><h3>Welcome to LMC Admin Service</h3></p></center>'
        )
      );

      this.app.use('/bypass', BPRoutes);

      Messenger.success('Bypass Routes added!');
    } catch (error: any) {
      Messenger.error('Error while adding Bypass routes!');
    }
  }

  /**
   * Add routes
   */
  private async addRoutes() {
    try {
      this.app.use(Routes);
      Messenger.success('Routes added!');
    } catch (error: any) {
      Messenger.error('Error occured while adding routes!');
    }
  }

  /**
   * Add payment webhook routes
   */
  private async addWebhookRoutes() {
    try {
      this.app.use(WebhookRoutes);
      Messenger.success('Routes added!');
    } catch (error: any) {
      Messenger.error('Error occured while adding routes!');
    }
  }

  /**
   * Handle bad request
   */
  private async handleBadRequest() {
    // Throw error for other than defined routes
    // @ts-ignore
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      ModifiedResponse.notFound(res);
    });
  }

  /**
   * Error handling
   */
  private async errorHandler() {
    this.app.use(ErrorHandler.celebrate());
  }

  /**
   * Start the application
   */
  private async start() {
    try {
      this.app.listen(APP.PORT);
      Messenger.success(`Server has been started at port ${APP.PORT}`);
    } catch (error: any) {
      Messenger.error(`Error occured while starting server ${error}`);
    }
  }
}

App.getInstance()
  .boot()
  .then(() => {
    Messenger.success(`Application started!---`);
  })
  .catch((error: any) => {
    Messenger.error(
      `Something went wrong while starting application! ${error}`
    );
  });
