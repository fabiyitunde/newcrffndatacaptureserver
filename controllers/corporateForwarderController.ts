import { Request, Response } from "express";
import { updateCorporateForwarder } from "../commands/corporateforwarder/updateCorporateForwarder";

import {
    getUnSubmittedCorporateForwarderList,
    getCorporateForwarderById,
    getCorporateForwarderByMembershipNumber,
    getForwarderCategoryList
} from "../queries/corporateForwarderQueries";


export class CorporateForwarderController {
    public async updateCorporateForwarder(req: Request, res: Response) {
        try {
            const {
                mongo_id,
                membershipnumber,
                companyname,
                userid
            } = req.body;

            await updateCorporateForwarder(
                mongo_id,
                membershipnumber,
                companyname,
                userid
            );
            var returndetail = await getCorporateForwarderByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // public async createCertificateRegister(req: Request, res: Response) {
    //     try {
    //         const {
    //             membershipnumber,
    //             companyname,
    //             category
    //         } = req.body;

    //         await createCertificateRegister(
    //             membershipnumber,
    //             companyname,
    //             category
    //         );
    //         var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
    //         res.status(200).json(returndetail);
    //     } catch (error) {
    //         res.status(400).send(error);
    //     }
    // }

    

    public async getCorporateForwarderById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            var returnobj = await getCorporateForwarderById(id);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getCorporateForwarderByMembershipNumber(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.params;
            var returnobj = await getCorporateForwarderByMembershipNumber(membershipnumber);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    

    public async getUnSubmittedCorporateForwarderList(req: Request, res: Response) {
        try {
            var returnlist = await getUnSubmittedCorporateForwarderList();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getForwarderCategoryList(req: Request, res: Response) {
        try {
            var returnlist = await getForwarderCategoryList();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}