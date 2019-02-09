#!/bin/sh
npm run build
rm -rf ~/Projects/phonebook-backend/build
cp -r build ~/Projects/phonebook-backend/
