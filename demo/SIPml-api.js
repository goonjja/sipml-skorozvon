/*
* Copyright (C) 2012 Doubango Telecom <http://www.doubango.org>
* License: BSD
* This file is part of Open Source sipML5 solution <http://www.sipml5.org>
*/

// IMPORTANT: /!\ DO NOT EDIT THIS FILE /!\

// ================== DEBUG CODE =============== //
var __b_release_mode = false;
var tag_hdr = document.getElementsByTagName('head')[0];
['SIPml.js', 'src/tinySIP/src/tsip_api.js'].forEach(function (file) {
    var tag_script = document.createElement('script');
    tag_script.setAttribute('type', 'text/javascript');
    tag_script.setAttribute('src', file + "?svn=224");
    tag_hdr.appendChild(tag_script);
});
if (window.console) {
    window.console.warn("YOUR ARE USING DEBUG CODE. PLEASE USE CODE UNDER 'release' FOLDER or check https://code.google.com/p/sipml5/wiki/FAQ#How_to_reduce_the_size_of_the_scripts_before_deploying for more information on how to amalgamate the code.");
}

// ================== RELEASE CODE =============== //
// http://code.google.com/p/sipml5/wiki/FAQ#How_to_reduce_the_size_of_the_scripts_before_deploying
//