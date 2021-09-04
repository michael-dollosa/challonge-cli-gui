# Challonge CLI using Challonge API v2.0

## Preface

This is a mini react project created using Challonge API v2.0. 

## After cloning the project, use yarn install

### `yarn install`

## Now start using the application

### `yarn start`

## Start using the Application

The application would notify you that you have to set your own Challonge API Key. You may create an account on their website - https://challonge.com/ to generate your own API Key.

## List of possible commands

Below are the list of commands currently working in this application

Checking list of possible commands
### `@commands`

Setting up API Key
### `@api -s "API KEY"`

Checking the current API key used in the application
### `@api -g`

Fetch all Tournaments created on your challonge account
### `@tournament -a`

Fetch specific Tournament via URL
### `@tournament -s "Tournament URL"`

Delete Tournament via URL
### `@tournament -d "Tournament URL"`

Fetch all matches from specific Tournament
### `@match -a "Tournament URL"`

Fetch specific match
### `@match -s "Tournament URL" "Match ID"`

![image](https://user-images.githubusercontent.com/5262223/132080939-7fad5b75-ceea-447a-a34f-c06a8fb5014a.png)
![image](https://user-images.githubusercontent.com/5262223/132080983-fdf78adf-ddcc-4009-baa1-266d2d8e631f.png)



