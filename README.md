# Challonge CLI using Challonge API v2.0

## Preface

This is a mini react project created using Challonge API v2.0. 

## After Cloning the project, use yarn install

### `yarn install`

## Now start using the application

### `yarn start`

## Starting using the CLI

The application would notify you that you have to set your own Challong API Key. You may create an account on their website - https://challonge.com/ to generate your own API Key.

For the sake of testing, I have set my own API Key as the default state.

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


