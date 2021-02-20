
function getClients() {
	var userDataRef = firebase.database().ref("database/clients").orderByKey();
    userDataRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            var email_val = childSnapshot.val().email;
            var splitCheck_val = childSnapshot.val().splitCheck;
            var stage_val = childSnapshot.val().stage;

            console.log("Are we here now?");
            console.log(email_val);
            console.log(splitCheck_val);
            console.log(stage_val);

            console.log("Yo, we here now???")
            console.log(emailDoc);

            test = test + 1;
            console.log(test);
            console.log("ARE WE HERE NOW????");
        });
    });
}

function getBookings() {
    var currentVal = 1;
    // var emailDoc;

    var userDataRef = firebase.database().ref("database/events").orderByKey();
    userDataRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            var client_val = childSnapshot.val().client; // Works
            var clientName_val = childSnapshot.val().clientName; // Names are empty in database, so unsure if it works
            var confirmationLastSent_val = childSnapshot.val().confirmationLastSent; // Works
            var date_val = childSnapshot.val().date; // Works
            var end_val = childSnapshot.val().end; // Works
            var invoiceLastSent_val = childSnapshot.val().invoiceLastSent; // Works
            var month_val = childSnapshot.val().month; // Works
            var price_val = childSnapshot.val().price; // Works
            var start_val = childSnapshot.val().start; // Works
            var venue_val = childSnapshot.val().venue; // Works

            console.log("----------------------------------")
            console.log("Client ID #" + currentVal + ": " + client_val);
            console.log("Client Name #" + currentVal + ": " + clientName_val);
            console.log("Last Confirmation Sent: #" + currentVal + ": " + confirmationLastSent_val);
            console.log("Client Date #" + currentVal + ": " + date_val);
            console.log("Client End Time #" + currentVal + ": " + end_val);
            console.log("Client Last Invoice Sent #" + currentVal + ": " + invoiceLastSent_val);
            console.log("Client Month #" + currentVal + ": " + month_val);
            console.log("Client Price #" + currentVal + ": " + price_val);
            console.log("Client Start Time #" + currentVal + ": " + start_val);
            console.log("Client Venue ID #" + currentVal + ": " + venue_val);
            console.log("----------------------------------")
            currentVal = currentVal + 1;

            // emailDoc = document.getElementById("email");
            // console.log(emailDoc);
            // emailDoc.innerHTML = email_val;
        });
    });
}

function getVenues() {
    var currentVal = 1;
    // var emailDoc;

    var userDataRef = firebase.database().ref("database/venues").orderByKey();
    userDataRef.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            var allConfirmationsLastSent_val = childSnapshot.val().allConfirmationsLastSent; // Works
            var allInvoicesLastSent_val = childSnapshot.val().allInvoicesLastSent; // Works
            var artistConfirmationSendOut_val = childSnapshot.val().artistConfirmationSendOut; // Works
            var artistInvoiceSendOut_val = childSnapshot.val().artistInvoiceSendOut; // Works
            var bookingListLastSent_val = childSnapshot.val().bookingListLastSent; // Works
            var calendarLastSent_val = childSnapshot.val().calendarLastSent; // Works
            var email_val = childSnapshot.val().email; // Works
            var monthlyBookingListSendOut_val = childSnapshot.val().monthlyBookingListSendOut; // Works
            var monthlyCalendarSendOut_val = childSnapshot.val().monthlyCalendarSendOut; // Works
            var name_val = childSnapshot.val().name; // Works

            console.log("----------------------------------")
            console.log("All Confirmations Last Sent #" + currentVal + ": " + allConfirmationsLastSent_val);
            console.log("All Invoices Last Sent #" + currentVal + ": " + allInvoicesLastSent_val);
            console.log("Artist Confirmation Send Out #" + currentVal + ": " + artistConfirmationSendOut_val);
            console.log("Artist Invoice Send Out #" + currentVal + ": " + artistInvoiceSendOut_val);
            console.log("Booking List Last Sent #" + currentVal + ": " + bookingListLastSent_val);
            console.log("Calendar Last Sent #" + currentVal + ": " + calendarLastSent_val);
            console.log("Email: #" + currentVal + ": " + email_val);
            console.log("Monthly Booking List Send Out #" + currentVal + ": " + monthlyBookingListSendOut_val);
            console.log("Monthly Calendar Send Out #" + currentVal + ": " + monthlyCalendarSendOut_val);
            console.log("Name: #" + currentVal + ": " + name_val);
            console.log("----------------------------------")
            currentVal = currentVal + 1;

            // emailDoc = document.getElementById("email");
            // console.log(emailDoc);
            // emailDoc.innerHTML = email_val;
        });
    });
}