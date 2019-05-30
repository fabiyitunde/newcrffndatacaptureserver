import { Request, Response } from "express";
import { updateCertificateRegister } from "../commands/certificateregister/updateCertificateRegister";
import { submitCertificateRegister } from "../commands/certificateregister/submitCertificateRegister";
import { approveCertificateRegister } from "../commands/certificateregister/approveCertificateRegister";
import { returnCertificateRegister } from "../commands/certificateregister/returnCertificateRegister";
import { issueCertificate } from "../commands/certificateregister/issueCertificate";
import {
    getUnSubmittedCertificateRegisterList,
    getCertificateRegisterById,
    getCertificateRegisterByMembershipNumber,
    getUnApprovedCertificateRegisterList,
    getUnIssuedCertificateRegisterList
} from "../queries/certificateRegisterQueries";
export class CertificateRegisterController {
    
    public async updateCertificateRegister(req: Request, res: Response) {
        try {
            const {
                mongo_id,
                membershipnumber,
                name,
                category,
                userid
            } = req.body;

            await updateCertificateRegister(
                mongo_id,
                membershipnumber,
                name,
                category,
                userid
            );
            var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async submitCertificateRegister(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await submitCertificateRegister(membershipnumber);
            var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async approveCertificateRegister(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await approveCertificateRegister(membershipnumber);
            var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async returnCertificateRegister(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await returnCertificateRegister(membershipnumber);
            var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async issueCertificate(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.body;

            await issueCertificate(membershipnumber);
            var returndetail = await getCertificateRegisterByMembershipNumber(membershipnumber);
            res.status(200).json(returndetail);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getCertificateRegisterById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            var returnobj = await getCertificateRegisterById(id);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getCertificateRegisterByMembershipNumber(req: Request, res: Response) {
        try {
            const { membershipnumber } = req.params;
            var returnobj = await getCertificateRegisterByMembershipNumber(membershipnumber);
            res.status(200).json(returnobj);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getUnSubmittedCertificateRegisterList(req: Request, res: Response) {
        try {
            const { userid } = req.params;
            var returnlist = await getUnSubmittedCertificateRegisterList(userid);
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getUnApprovedCertificateRegisterList(req: Request, res: Response) {
        try {
            var returnlist = await getUnApprovedCertificateRegisterList();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async getUnIssuedCertificateRegisterList(req: Request, res: Response) {
        try {
            var returnlist = await getUnIssuedCertificateRegisterList();
            res.status(200).json(returnlist);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}