import * as express from 'express';
import { bootstrapApiAdmin } from './index';

bootstrapApiAdmin(express(), true);
