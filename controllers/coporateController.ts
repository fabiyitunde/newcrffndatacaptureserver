import { Request, Response } from "express";
import { createCoporateData } from "../commands/coporate/createCoporateData";
import { updateCorporateData } from "../commands/coporate/updateCorporateData";
import { submitCorporateData } from "../commands/coporate/submitCorporateData";
import { approveCoporateData } from "../commands/coporate/approveCoporateData";
import { returnCoporateData } from "../commands/coporate/returnCoporateData";
import {
  getCoporateDataByCRFFNNumber,
  getCoporateDataById,
  getUnSubmittedCoporateDataList,
  getUnApprovedCoporateDataList
} from "../queries/coporateDataQueries";
import { getStateList } from "../queries/ParameterQueries";
import { getCoporateMemeberListIssuedCertificates } from "../queries/certificateRegisterQueries";
import * as fs from "fs";
import * as multiparty from "multiparty";

export class CoporateController {
  public async createCoporateData(req: Request, res: Response) {
    try {
      const {
        membershipnumber,
        companyname,
        category,
        address,
        association,
        email,
        contactperson,
        isOperatingAtAirPort,
        isOperatingAtLandBorder,
        isOperatingAtSeaPort,
        operationStartDate,
        phoneNumber,
        postalAddress,
        rCNos,
        statecode,
        website,
        userid
      } = req.body;

      await createCoporateData(
        membershipnumber,
        companyname,
        category,
        address,
        association,
        email,
        contactperson,
        isOperatingAtAirPort,
        isOperatingAtLandBorder,
        isOperatingAtSeaPort,
        operationStartDate,
        phoneNumber,
        postalAddress,
        rCNos,
        statecode,
        website, 
        userid
      );
      var returndetail = await getCoporateDataByCRFFNNumber(membershipnumber);
      res.status(200).json(returndetail);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async updateCorporateData(req: Request, res: Response) {
    try {
      const {
        mongo_id,
        membershipnumber,
        companyname,
        category,
        address,
        association,
        email,
        contactperson,
        isOperatingAtAirPort,
        isOperatingAtLandBorder,
        isOperatingAtSeaPort,
        operationStartDate,
        phoneNumber,
        postalAddress,
        rCNos,
        statecode,
        website
      } = req.body;

      await updateCorporateData(
        mongo_id,
        membershipnumber,
        companyname,
        category,
        address,
        association,
        email,
        contactperson,
        isOperatingAtAirPort,
        isOperatingAtLandBorder,
        isOperatingAtSeaPort,
        operationStartDate,
        phoneNumber,
        postalAddress,
        rCNos,
        statecode,
        website
      );
      var returndetail = await getCoporateDataByCRFFNNumber(membershipnumber);
      res.status(200).json(returndetail);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async submitCorporateData(req: Request, res: Response) {
    try {
      const { membershipnumber } = req.body;

      await submitCorporateData(membershipnumber);
      var returndetail = await getCoporateDataByCRFFNNumber(membershipnumber);
      res.status(200).json(returndetail);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async approveCoporateData(req: Request, res: Response) {
    try {
      const { membershipnumber } = req.body;

      await approveCoporateData(membershipnumber);
      var returndetail = await getCoporateDataByCRFFNNumber(membershipnumber);
      res.status(200).json(returndetail);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async returnCoporateData(req: Request, res: Response) {
    try {
      const { membershipnumber } = req.body;

      await returnCoporateData(membershipnumber);
      var returndetail = await getCoporateDataByCRFFNNumber(membershipnumber);
      res.status(200).json(returndetail);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async getCoporateDataByMemebershipId(req: Request, res: Response) {
    try {
      const { membershipnumber } = req.params;
      var returnobj = await getCoporateDataByCRFFNNumber(membershipnumber);
      res.status(200).json(returnobj);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async getCoporateDataById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      var returnobj = await getCoporateDataById(id);
      res.status(200).json(returnobj);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async getCoporateMemeberListIssuedCertificates(
    req: Request,
    res: Response
  ) {
    try {
      var returnlist = await getCoporateMemeberListIssuedCertificates();
      res.status(200).json(returnlist);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async getUnSubmittedCoporateDataList(req: Request, res: Response) {
    try {
      const { userid } = req.params;
      var returnlist = await getUnSubmittedCoporateDataList(userid);
      res.status(200).json(returnlist);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async getUnApprovedCoporateDataList(req: Request, res: Response) {
    try {
      var returnlist = await getUnApprovedCoporateDataList();
      res.status(200).json(returnlist);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async getStatesList(req: Request, res: Response) {
    try {
      var returnlist = await getStateList();
      res.status(200).json(returnlist);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
