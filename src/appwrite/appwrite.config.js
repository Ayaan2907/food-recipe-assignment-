import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  END_POINT: process.env.REACT_APP_END_POINT,
  PROJECT_ID: process.env.REACT_APP_PROJECT_ID, 
  COLLECTION_ID: process.env.REACT_APP_COLLECTION_ID,
  DATABASE_ID : process.env.REACT_APP_DATABASE_ID,
};
