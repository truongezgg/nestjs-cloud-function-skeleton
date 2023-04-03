require('dotenv').config();
import * as express from 'express';
import * as functions from '@google-cloud/functions-framework';
import { bootstrapApi } from 'apps/api/src';
import { bootstrapApiAdmin } from 'apps/api-admin/src';

let serverApi: express.Express;
let serverApiAdmin: express.Express;

functions.http('api', async (req, res) => {
  serverApi = serverApi ?? (await bootstrapApi(express()));
  return serverApi(req, res);
});

functions.http('api-admin', async (req, res) => {
  serverApiAdmin = serverApiAdmin ?? (await bootstrapApiAdmin(express()));
  return serverApiAdmin(req, res);
});
