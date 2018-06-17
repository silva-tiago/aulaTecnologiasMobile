/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
		
	document.getElementById("btnPickContatcts").addEventListener(

	    "click", this.onClickBtnPickContatcts.bind(this), false);


    },
	//Contacts (not io quirks treatnebt

    onClickBtnPickContatcts:function(){

        navigator.contacts.pickContact(function(contact){

            console.log('###&&&The following contact has been selected:' + JSON.stringify(contact));

            var s = "";

            s += "<h2>"+contact.displayName+"</h2>";



            if(contact.emails && contact.emails.length) {

                s+= "Email: "+contact.emails[0].value+"<br/>";

            }

            

            if(contact.phoneNumbers && contact.phoneNumbers.length) {

                s+= "Phone: "+contact.phoneNumbers[0].value+"<br/>";

            }

            

            if(contact.photos && contact.photos.length) {

                s+= "<p><img src='"+contact.photos[0].value+"'></p>";

            }

            document.querySelector("#contatoSelecionado").innerHTML=s;

            

        },function(err){

            console.log('Error: ' + err);

        });

    },



    onClickBtnPickContatctsForSMS:function(){

        navigator.contacts.pickContact(function(contact){

            var cDisplayName = contact.displayName;

            var cNumTel="Contato S/ Num Tel";

            if(contact.phoneNumbers && contact.phoneNumbers.length) {

                cNumTel = contact.phoneNumbers[0].value;

            }

            document.getElementById('number4sms').value=cNumTel;

            document.getElementById('msg4sms').innerHTML=cDisplayName;

            

        },function(err){

            console.log('Error: ' + err);

        });

    },
	

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();