#!/bin/bash

{
  . .ve3/bin/activate &&
  python application.py
} || {
  printf "\nyou may be missing virtualenv or python3 on your computer.\n\n\n"
}
