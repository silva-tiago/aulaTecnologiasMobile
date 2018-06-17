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
 function onDeviceReady() {

    console.log(navigator.camera);

}
 
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
		
		document.getElementById("btnShowCamera").addEventListener(

	    "click", this.onClickBtnShowCamera.bind(this), false);


    },
	  //CAMERA

    onClickBtnShowCamera : function(){

	let CameraOptions={

	    quality: 100,

	    destinationType: navigator.camera.DestinationType.FILE_URI,

	    sourceType: navigator.camera.PictureSourceType.CAMERA,

	    encodingType: navigator.camera.EncodingType.JPEG,

	    cameraDirection: 2,

	    saveToPhotoAlbum: true

	};

 

	navigator.camera.getPicture(

	    this.CameraGetPictureSuccess,

	    this.CameraGetPictureFail,

	    CameraOptions

	);

    },



    CameraGetPictureSuccess:function(imageURI) {

	console.log("###CameraGetPictureSuccess:function(imageURI) {...");

	console.log("###imageURI="+imageURI)//file:///storage/emulated/0/Pictures/IMG_20180411_020250.jpg

        var image = document.getElementById('imagem');

        image.style.display = 'block';

        image.src = imageURI;

	this.app.CameraGetPictureSucess_PersistImg(imageURI);

    },



    //https://cordova.apache.org/docs/en/2.0.0/cordova/file/fileentry/fileentry.html

    CameraGetPictureSucess_PersistImg:function(imageURI){

        console.log("###>>>CameraGetPictureSucess_PersistImg:function(imageURI){...");

        console.log("###this.dataDirectory="+this.dataDirectory);

	

        console.log("###imageURI="+imageURI);

        

	//from: https://www.joshmorony.com/store-camera-photos-permanently-using-phonegap-ionic-ngcordova/

	//Grab the file name of the photo in the temporary directory

	//var currentName = imageURI.replace(/^.*[\\\/]/, '');

    

        window.resolveLocalFileSystemURL(imageURI, function(fileEntry){

            console.log("###>>> >>>>window.resolveLocalFileSystemURL(imageURI, function(fileEntry){...");

            console.log("###Object.getOwnPropertyNames(fileEntry)");

            console.log("###"+Object.getOwnPropertyNames(fileEntry));            

        },function(error){

            console.log("### window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function(directory){... " + error);

        });// window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(directory){       

    },

                                         

    

    CameraGetPictureFail:function(message) {

        console.log('###Failed because: ' + message);

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