# HW12-Friend-Finder

### Overview

This app allows for a user to match with a friend the is most similar to them from the database, based on the responses to the 10 questions asked.

### Instructions

Input your name, a link to your picture, and answer each question from a range of 1 to 5.
Click Submit.
This will return a friend with the most similar results and 'match' the user.

### How it Works

The Name, Photo Link, and Answer Choices (stored in an array), are all stored in the newUser Object.
The Answer choices are then compared to all possible friends in the data set, returns the best matching result based on the smallest difference between the user choices and the friends choices. 