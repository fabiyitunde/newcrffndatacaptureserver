import { Request, Response } from "express";
import { updateIndividualForwarder } from "../commands/individualforwarder/updateIndividualForwarder";

import {
    getUnSubmittedIndividualForwarderList,
    getIndividualForwarderById,
    getIndividualForwarderByMembershipNumber
} from "../queries/individualForwarderQueries";


export class IndividualForwarderController {
    public async updateIndividualForwarder(req: Request, res: Response) {
        try {
            const {
                mongo_id,
                membershipnumber,
                surname,
                firstname,
                middlename,
                userid
            } = req.body;

            await updateIndividualForwarder(
                mongo_id,
                membershipnumber,
                surname,
                firstname,
                middlename,
                userid
            );
            var returndetail = await getIndividualForwarderByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    
    public async getIndividualForwarderById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            var returnobj = await getIndividualForwarderById(id);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getIndividualForwarderByMembershipNumber(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.params;
            var returnobj = await getIndividualForwarderByMembershipNumber(membershipnumber);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    } 

    public async getUnSubmittedIndividualForwarderList(req: Request, res: Response) {
        try {
            var returnlist = await getUnSubmittedIndividualForwarderList();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }

   
}