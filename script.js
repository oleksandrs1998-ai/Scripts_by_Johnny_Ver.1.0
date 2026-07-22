const field1_customer_name=document.getElementById("field1_customer_name");
const field2_days_left=document.getElementById("field2_days_left");
const field3_trailer_number=document.getElementById("field3_trailer_number");
const field4_main=document.getElementById("field4_main");

const button_generate=document.getElementById("button_generate");
const button_clear=document.getElementById("button_clear");

const q_inspection_box=document.getElementById("q_inspection_box");
const q_inspection_detailed_box=document.getElementById("q_inspection_detailed_box");
const spds_box_qi=document.getElementById("spds_box_qi");

const pre_trip_general_box=document.getElementById("pre_trip_general_box");
const pre_trip_reminder_box=document.getElementById("pre_trip_reminder_box");
const pre_trip_trailer_box=document.getElementById("pre_trip_trailer_box");
const spds_pre_trip_box=document.getElementById("spds_pre_trip_box");

const welcome_box=document.getElementById("welcome_box");

button_clear.addEventListener("click", function(){
    field4_main.value="";
})
button_generate.addEventListener("click", function(){
    if(q_inspection_box.checked){
        field4_main.value=
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, I would just like to remind you that you have
${field2_days_left.value} days left to get the Quarterly Inspection done.

Thank you, and I wish you a wonderful day! =)`
        q_inspection_box.checked=false;
        field1_customer_name.value="";
        field2_days_left.value="";
    }
});
button_generate.addEventListener("click", function(){
    if(q_inspection_detailed_box.checked) {
        field4_main.value =
`Hello, ${field1_customer_name.value}, 
it's Johnny with the safety department.
         
${field1_customer_name.value}, I would just like to remind you that you have
${field2_days_left.value} days left to get the Quarterly Inspection done.
           
You can get this inspection done for your own equipment only
at one of these shops (the inspection needs to be full DOT):
TA (Petro), LOVEs (SpeedCo), Kram Tires, Good Year, BOSS Shop.
            
If you would like to pass the inspection for free, please visit one of our two shops.
Their addresses and working hours are mentioned in the email that we sent to you.
           
Thank you, and I wish you a wonderful day! =)`
        q_inspection_detailed_box.checked = false;
        field1_customer_name.value = "";
        field2_days_left.value = "";
    }
});

button_generate.addEventListener("click", function () {
    if (spds_box_qi.checked) {
        field4_main.value =
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, I just wanted to inform you that dispatch for your equipment will be put on hold starting ${field2_days_left.value} due to the overdue inspection.

Please complete the inspection for your own equipment at one of the approved shops: TA/Petro, Love’s/SpeedCo, Kram Tires, Goodyear, BOSS Shop, or one of our two shops.

Once the inspection is completed and submitted, dispatch will be restored.

Thank you, and I wish you a wonderful day! =)`;

        spds_box_qi.checked = false;
        field1_customer_name.value = "";
        field2_days_left.value = "";
    }
});

button_generate.addEventListener("click", function(){
    if(pre_trip_general_box.checked){
        field4_main.value=
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, I would like to inform you that, according to our company procedure, drivers are required 
to complete daily pre-trip inspections in the Motive application and upload the required photos.

This process helps us ensure proper equipment verification and compliance.

After completing the truck inspection, please proceed with the trailer inspection.

Thank you, and I wish you a wonderful day!`
        pre_trip_general_box.checked=false;
        field1_customer_name.value = "";
        field3_trailer_number.value="";
    }
});

button_generate.addEventListener("click", function() {
    if(pre_trip_reminder_box.checked){
        field4_main.value=
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, please don't forget to perform a pre-trip inspection for your equipment.

It is a mandatory procedure for all our drivers in the company.

If you don’t start completing them regularly, we won't be able provide dispatch services to you.

Thank you
`
        field1_customer_name.value="";
        pre_trip_reminder_box.checked=false;
        field1_customer_name.value = "";
}
});

button_generate.addEventListener("click", function() {
    if (pre_trip_trailer_box.checked) {
        field4_main.value=
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, please don't forget to complete a pre-trip inspection for your trailer as well.

After you complete the truck inspection, please select "Yes" in the field:
"Would you like to also add an asset inspection?" 

Then please choose your trailer from the list.
Your trailer number is: ${field3_trailer_number.value}.

After that, please complete the pre-trip inspection for the trailer.

Thank you, and I wish you a wonderful day! =)`
pre_trip_trailer_box.checked=false;
field1_customer_name.value="";
field3_trailer_number.value="";

    }
});

button_generate.addEventListener("click", function(){
    if(spds_pre_trip_box.checked){
        field4_main.value=
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, I would like to inform you that we had to stop 
providing dispatch services for your equipment 
because you have not been completing pre-trip inspections in Motive.

Please start completing them, and dispatch services will be restored immediately.

Once you complete a pre-trip inspection, please send me a text message.

Thank you! Have a good day! =)`

spds_pre_trip_box.checked=false;
field1_customer_name.value="";
    }
});

button_generate.addEventListener("click", function(){
    if(welcome_box.checked){
        field4_main.value=
`Hello, ${field1_customer_name.value},
it's Johnny with the Safety Department.

${field1_customer_name.value}, if you are pulled over by a DOT officer and receive any paperwork, 
please send all documents to this email address:

safety@dispatchandservices.com

Thank you! Have a good day! =)`





welcome_box.checked=false;
field1_customer_name.value="";

    }
});


