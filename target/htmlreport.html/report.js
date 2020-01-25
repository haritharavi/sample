$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumber/cucum.feature");
formatter.feature({
  "name": "Registration Process",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test registration with multiple set of data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to registration process",
  "keyword": "* "
});
formatter.step({
  "name": "user enter username as \"\u003cusername\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user enter confirm password as \"\u003cconfirm_password\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user clicks submit button",
  "keyword": "* "
});
formatter.step({
  "name": "verify registration",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "confirm_password"
      ]
    },
    {
      "cells": [
        "hari",
        "thahari",
        "thahari"
      ]
    },
    {
      "cells": [
        "that",
        "istist",
        "istist"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test registration with multiple set of data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to registration process",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter username as \"hari\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter password as \"thahari\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter confirm password as \"thahari\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks submit button",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify registration",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Test registration with multiple set of data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to registration process",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter username as \"that\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter password as \"istist\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter confirm password as \"istist\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks submit button",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify registration",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});