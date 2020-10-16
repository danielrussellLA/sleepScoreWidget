#!/bin/bash

# install python dependencies
{
  if [ ! -d "./.ve3" ]; then
    virtualenv .ve3 --python=python3.6 &&
    . .ve3/bin/activate &&
    .ve3/bin/pip3 install -r requirements.txt
  else
    echo 'python dependencies already installed :)'
  fi
} || {
  printf "\nyou may be missing virtualenv or python3 on your computer.\n\n\n"
}

# install node dependencies
{
  if [ ! -d "./node_modules" ]; then
    npm install
  else
    echo 'node depdenencies already installed :)'
  fi
} || {
  printf "\nyou may be missing node v 12.19.0 on your computer.\n\n\n"
}
