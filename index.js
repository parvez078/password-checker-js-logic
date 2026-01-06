let password = "parvez";
let userpass;
let attempts = 3; // लिमिट को वेरिएबल में रखना बेहतर है
let i = 1;

do {
    userpass = prompt(`Enter your password (Attempt ${i}/${attempts}):`);

    if (userpass === password) {
        console.log("Access Granted: Right password!");
        break; // सही पासवर्ड मिलते ही लूप खत्म
    } else {
        if (i === attempts) {
            console.log("Access Denied: Your password checker limit is end.");
        } else {
            console.log(`Wrong password. Try again! Remaining: ${attempts - i}`);
        }
        i++;
    }
} while (i <= attempts); 
