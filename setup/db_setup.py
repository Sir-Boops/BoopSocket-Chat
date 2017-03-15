#!/usr/bin/python3

# Python Imports
import sqlite3
import os

# Delete the old database
os.remove('./dbs/users.sql');

# Define the Database
db = sqlite3.connect('./dbs/users.sql');
print 'Connected to DB';

# Create the tables
db.execute('CREATE TABLE main.users (UUID text, username text, password text, rand text)');
print 'Database Created';
