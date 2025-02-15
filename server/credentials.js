/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

// app config settings
var config = require('./config');

function Credentials(session) {
  this._session = session;
}

Credentials.prototype.setApsCredentials = function (accessToken) {
  this._session.ApsCredentials = accessToken;
};

Credentials.prototype.getApsCredentials = function () {
  return this._session.ApsCredentials;
};

Credentials.prototype.setAutodeskId = function(autodeskId){
  this._session.AutodeskId = autodeskId;
};

Credentials.prototype.getAutodeskId = function () {
  return this._session.AutodeskId;
};

module.exports = Credentials;