import * as express from 'express';
import { bootstrapApi } from './index';

bootstrapApi(express(), true);
