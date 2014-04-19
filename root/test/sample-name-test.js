/*
 * Sample test suite for the sample-{%= name %} module (sample-{%= name %}-module.js).
 * Mocha assertions reference: http://visionmedia.github.io/mocha/#assertions
 */

/* jshint -W098 */

'use strict';

var should = require("should"),
	{%= js_test_safe_name %} = require("../src/custom-modules/sample-{%= name %}-module.js");

describe( "{%= name %}", function() {
	describe( "awesome()", function() {
		it( "should be awesome", function() {
			{%= js_test_safe_name %}.awesome().should.equal( "awesome" );
		} );
	} );
} );