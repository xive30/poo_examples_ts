import { Router } from "express";
import {handler }from "./handler";

export const router = Router();

router.get('/ocp', handler.testOcp);
router.get('/substitution', handler.testSubstitutionLiskov);
router.get('/segreg', handler.testInterfaceSegregation);
router.get('/injection', handler.testDependencyInjection);

