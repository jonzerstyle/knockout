#!/bin/bash

set -x
cljsc hello.cljs > hello.js
set +x

