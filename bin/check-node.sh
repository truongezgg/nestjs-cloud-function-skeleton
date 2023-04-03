#!/bin/sh

RED='\033[30;31m'
GREEN='\033[0;32m'
NODE_VERSION=$(node --version)


if node --version | grep -q '^v18.[[:digit:]]*.[[:digit:]]*'; then
  echo "$GREEN node version correct $NODE_VERSION"
else
  echo ""
  echo ""
  echo ""
  echo "$RED----------------------------------------------------------------"

  i=0;
  while [ $i -le 5 ];
    do echo "${RED}|           |                                   |              |";
    i=$((i+1));
  done


  echo "$RED-------------node required 18-19 but has $NODE_VERSION----------------"

  j=0;
  while [ $j -le 5 ];
    do echo "$RED|           |                                   |              |";
    j=$((j+1));
  done

  echo "$RED----------------------------------------------------------------"
  echo ""
  echo ""
  echo ""
  exit 1
fi
