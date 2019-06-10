import { Request, Response } from "express";
import { createIndividualData } from "../commands/individual/createIndividualData";
import { updateIndividualData } from "../commands/individual/updateIndividualData";
import { submitIndividualData } from "../commands/individual/submitIndividualData";
import { approveIndividualData } from "../commands/individual/approveIndividualData";
import { returnIndividualData } from "../commands/individual/returnIndividualData";
import {
    getIndividualDataByCRFFNNumber,
    getIndividualDataById,
    getUnSubmittedIndividualDataList,
    getUnApprovedIndividualDataList
} from "../queries/individualDataQueries";
import { getIndividualMemeberListIssuedCertificates } from "../queries/certificateRegisterQueries";


export class IndividualController {
    public async createIndividualData(req: Request, res: Response) {
        try {
            const {
                membershipnumber,
                title,
                surname,
                othernames,
                category,
                address,
                email,
                phonenumber,
                statecode,
                lgacode,
                typeofid,
                idcardnumber,
                userid
            } = req.body;

            await createIndividualData(
                membershipnumber,
                title,
                surname,
                othernames,
                category,
                address,
                email,
                phonenumber,
                statecode,
                lgacode,
                typeofid,
                idcardnumber,
                userid
            );
            var returndetail = await getIndividualDataByCRFFNNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async updateIndividualData(req: Request, res: Response) {
        try {
            const {
                mongo_id,
                membershipnumber,
                title,
                surname,
                othernames,
                category,
                address,
                email,
                phonenumber,
                statecode,
                lgacode,
                typeofid,
                idcardnumber
            } = req.body;

            await updateIndividualData(
                mongo_id,
                membershipnumber,
                title,
                surname,
                othernames,
                category,
                address,
                email,
                phonenumber,
                statecode,
                lgacode,
                typeofid,
                idcardnumber
            );
            var returndetail = await getIndividualDataByCRFFNNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async submitIndividualData(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await submitIndividualData(membershipnumber);
            var returndetail = await getIndividualDataByCRFFNNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async approveIndividualData(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await approveIndividualData(membershipnumber);
            var returndetail = await getIndividualDataByCRFFNNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async returnIndividualData(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await returnIndividualData(membershipnumber);
            var returndetail = await getIndividualDataByCRFFNNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async getIndividualDataByMemebershipId(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.params;
            var returnobj = await getIndividualDataByCRFFNNumber(membershipnumber);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getIndividualDataById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            var returnobj = await getIndividualDataById(id);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async getIndividualMemeberListIssuedCertificates(req: Request, res: Response) {
        try {
            var returnlist = await getIndividualMemeberListIssuedCertificates();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async getUnSubmittedIndividualDataList(req: Request, res: Response) {
        try {
            const { userid } = req.params;
            var returnlist = await getUnSubmittedIndividualDataList(userid);
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    public async getUnApprovedIndividualDataList(req: Request, res: Response) {
        try {
            var returnlist = await getUnApprovedIndividualDataList();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
