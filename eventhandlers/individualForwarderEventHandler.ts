import * as postal from "postal";
import { postalChannels, postalTopics } from "../parameters";
import PQueue from "p-queue";
import { createCertificateRegister } from "../commands/certificateregister/createCertificateRegister";

const queue = new PQueue({ concurrency: 1 });
export const individualForwarderUpdatedEventHandler = () => {
    const channel = postal.channel(postalChannels.crffnDataCapture);
    channel.subscribe(postalTopics.individualForwarderUpdated, eventobj => {
        queue.add(() =>
            Promise.resolve(CreateCertificateRegister(eventobj)).then(() => {
                console.log("Certificate Register Created");
            })
        );
    });
};

const CreateCertificateRegister = async (eventobj: any) => {
    const body = {
        membershipnumber: eventobj.membershipnumber,
        name: eventobj.surname + " " + eventobj.firstname + " " + eventobj.middlename,
        category: eventobj.category,
        userid: eventobj.userid
    }
    createCertificateRegister(body.membershipnumber, body.name, body.category, body.userid);
};

