const Functions = require('firebase-functions/lib/index');
const NodeMailer = require("nodemailer");
const Util = require("../util.js");

const env = Functions.config();
const gmail = NodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: 'musicmattersbookings',
        pass: 'jjpilshypwifnjac'
    },
    pool: true,         // Don't have a separate connection per message
    maxConnections: 1,  // Only one connection to Gmail at a time
    maxMessages: 5,     // 5 emails per connection
    rateDelta: 5000,    // Within a 5 seconds limit...
    rateLimit: 1        // Only send one email
});

const sendEmail = function (data) {
    return new Promise((resolve, reject) => {

        if (!data.to) {
            reject("[!] Error sending email, no recipient specified");
        }

        data.from = "musicmattersbookings@gmail.com";
        gmail.sendMail(data)
        .then(() => {
            resolve(data.attachments[0].content); // Return PDF
        }).catch(err => {
            reject(err);
        });
    });
};
exports.sendEmail = sendEmail;

// For Confirmations and Invoices: data = [ event, client, venue ]
// For Booking and Calendar: data = [ events, venue, month, year ]
exports.sendForm = function(data, pdf, type){
    return new Promise((resolve, reject) => {
        if(type == 'Confirmation'){
            emailSubject = data[2].name + " - Artist Confirmation";
            recipient = data[1].email;
            fileName = "Confirmation " + data[1].date + ".pdf";
        }
        else if (type == 'Invoice') {
            emailSubject = data[1].stage + " - Invoice - " + Util.toUS(data[0].date);
            recipient = [data[2].email, data[2].emaillist];
            fileName = "Invoice " + data[0].date + ".pdf";
        }
        else if (type == 'Calendar'){
            monthText = Util.monthEnum(data[2] - 1);
            emailSubject = "Booking Calendar - " + monthText + " " + data[3];
            recipient = [data[1].email, data[1].emaillist];
            fileName = "Booking Calendar " + monthText + " " + data[3] + ".pdf";
        }
        else{
            monthText = Util.monthEnum(data[2] - 1);
            emailSubject = "Booking List - " + monthText + " " + data[3];
            recipient = [data[1].email, data[1].emaillist];
            fileName = "Booking List " + monthText + " " + data[3] + ".pdf";
        }
        return sendEmail({
            to: recipient,
            subject: emailSubject,
            attachments: [
                {
                    filename: fileName,
                    content: pdf
                }
            ]
        }).then(pdf => {
            resolve(pdf);
        }).catch(err => {
            reject(err);
        });
    });
}
