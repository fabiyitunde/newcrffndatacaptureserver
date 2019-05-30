import * as postal from "postal";
import { postalChannels, postalTopics, FreightForwaderCategory } from "../parameters";
import PQueue from "p-queue";
import fetch from "node-fetch";
import * as mongoose from "mongoose";
import { treatCorporateForwarder } from "../commands/corporateforwarder/treatCorporateForwarder";
import { treatIndividualForwarder } from "../commands/individualforwarder/treatIndividualForwarder";
import { getCertificateRegisterByMembershipNumber } from "../queries/certificateRegisterQueries";

const queue = new PQueue({ concurrency: 1 });
export const certificateRegisterApprovedEventHandler = () => {
    const channel = postal.channel(postalChannels.crffnDataCapture);
    channel.subscribe(postalTopics.certificateRegisterApproved, eventobj => {
        queue.add(() =>
            Promise.resolve(TreatForwarder(eventobj)).then(() => {
                console.log("Forwarder Record Treated");
            })
        );
    });
};

const TreatForwarder = async (eventobj: any) => {
    var returnobj = await getCertificateRegisterByMembershipNumber(eventobj);
    if (returnobj.category.code == FreightForwaderCategory.Staff
        || returnobj.category.code == FreightForwaderCategory.Executive) {
        treatIndividualForwarder(eventobj);
    } else {
        treatCorporateForwarder(eventobj);
    }
};

