import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Farm } from '../models/Farm';
import { OtpLog } from '../models/OtpLog';
import { Role } from '../models/Role';
import { DroneProject } from '../models/DroneProject';
import { SatelliteNDVIRecord } from '../models/SatelliteNDVIRecord';
import { IoTDevice } from '../models/IoTDevice';
import { ServiceBooking } from '../models/ServiceBooking';
import { Payment } from '../models/Payment';
import { WeatherForecast } from '../models/WeatherForecast';
import { Wallet } from '../models/Wallet';
import { Crop } from '../models/Crop';
import { ContentArticle } from '../models/ContentArticle';
import { Advisory } from '../models/Advisory';
import { DroneUpload } from '../models/DroneUpload';
import { Notification } from '../models/Notification';
import { WalletTransaction } from '../models/WalletTransaction';
import { DroneSurvey } from '../models/DroneSurvey';
import { IoTData } from '../models/IoTData';
import { WaterResource } from '../models/WaterResource';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
 
  logging: false,
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
 
  retry: {
    max: 3
  }
});

export default sequelize;
