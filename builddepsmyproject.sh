#!/bin/bash

python closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=myproject/ \
  --namespace="myproject.start"
