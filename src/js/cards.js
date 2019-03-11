const cards = [
    {
        "value": "A", 
        "suit": "&spades;", 
        "color": "black", 
        "description": "ace of spades"
    }, 
    {
        "value": 2, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "two of spades"
    }, 
    {
        "value": 3, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "three of spades"
    }, 
    {
        "value": 4, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "four of spades"
    }, 
    {
        "value": 5, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "five of spades"
    }, 
    {
        "value": 6, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "six of spades"
    }, 
    {
        "value": 7, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "seven of spades"
    }, 
    {
        "value": 8, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "eight of spades"
    }, 
    {
        "value": 9, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "nine of spades"
    }, 
    {
        "value": 10, 
        "suit": "&spades;", 
        "color": "black", 
        "description": "ten of spades"
    }, 
    {
        "value": "J", 
        "suit": "&spades;", 
        "color": "black", 
        "description": "jack of spades"
    }, 
    {
        "value": "Q", 
        "suit": "&spades;", 
        "color": "black", 
        "description": "queen of spades"
    }, 
    {
        "value": "K", 
        "suit": "&spades;", 
        "color": "black", 
        "description": "king of spades"
    }, 
    {
        "value": "A", 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "ace of hearts"
    }, 
    {
        "value": 2, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "two of hearts"
    }, 
    {
        "value": 3, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "three of hearts"
    }, 
    {
        "value": 4, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "four of hearts"
    }, 
    {
        "value": 5, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "five of hearts"
    }, 
    {
        "value": 6, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "six of hearts"
    }, 
    {
        "value": 7, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "seven of hearts"
    }, 
    {
        "value": 8, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "eight of hearts"
    }, 
    {
        "value": 9, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "nine of hearts"
    }, 
    {
        "value": 10, 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "ten of hearts"
    }, 
    {
        "value": "J", 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "jack of hearts"
    }, 
    {
        "value": "Q", 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "queen of hearts"
    }, 
    {
        "value": "K", 
        "suit": "&hearts;", 
        "color": "red", 
        "description": "king of hearts"
    }, 
    {
        "value": "A", 
        "suit": "&diams;", 
        "color": "red", 
        "description": "ace of diamonds"
    }, 
    {
        "value": 2, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "two of diamonds"
    }, 
    {
        "value": 3, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "three of diamonds"
    }, 
    {
        "value": 4, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "four of diamonds"
    }, 
    {
        "value": 5, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "five of diamonds"
    }, 
    {
        "value": 6, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "six of diamonds"
    }, 
    {
        "value": 7, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "seven of diamonds"
    }, 
    {
        "value": 8, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "eight of diamonds"
    }, 
    {
        "value": 9, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "nine of diamonds"
    }, 
    {
        "value": 10, 
        "suit": "&diams;", 
        "color": "red", 
        "description": "ten of diamonds"
    }, 
    {
        "value": "J", 
        "suit": "&diams;", 
        "color": "red", 
        "description": "jack of diamonds"
    }, 
    {
        "value": "Q", 
        "suit": "&diams;", 
        "color": "red", 
        "description": "queen of diamonds"
    }, 
    {
        "value": "K", 
        "suit": "&diams;", 
        "color": "red", 
        "description": "king of diamonds"
    }, 
    {
        "value": "A", 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "ace of clubs"
    }, 
    {
        "value": 2, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "two of clubs"
    }, 
    {
        "value": 3, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "three of clubs"
    }, 
    {
        "value": 4, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "four of clubs"
    }, 
    {
        "value": 5, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "five of clubs"
    }, 
    {
        "value": 6, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "six of clubs"
    }, 
    {
        "value": 7, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "seven of clubs"
    }, 
    {
        "value": 8, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "eight of clubs"
    }, 
    {
        "value": 9, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "nine of clubs"
    }, 
    {
        "value": 10, 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "ten of clubs"
    }, 
    {
        "value": "J", 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "jack of clubs"
    }, 
    {
        "value": "Q", 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "queen of clubs"
    }, 
    {
        "value": "K", 
        "suit": "&clubs;", 
        "color": "black", 
        "description": "king of clubs"
    }
];
