import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return str(self.value) + " of " + self.suit


class Deck:
    def __init__(self):
        self.deck = []

    def build_deck(self):
        suits = ['♠', '♦', '♥', '♣']
        values = [1,2,3,4,5,6,7,8,9,10,"Jack","Queen",'King']
        for suit in suits:
            for value in values:
                self.deck.append(Card(suit, value))
                
    def shuffle(self):
        random.shuffle(self.deck)
    def print_card(self,card):
        playing_card = (
                '┌───────────┐\n'
                '│ {:<10}│\n'
                '│           │\n'
                '│           │\n'
                '│     {}     │\n'
                '│           │\n'
                '│           │\n'
                '│{:>10} │\n'
                '└───────────┘\n'
            )
        print(playing_card.format(card.value,card.suit,card.value))
    
    
class Player:
    def __init__(self,name="",score=0):
        self.name = name
        self.score = score
    def sumoftwo(self,value):
        self.score += value
        return self
    def checkscore(self):
        return self.score
    def display_name(self):
        return self.name
    def refresh_score(self):
        self.score = 0

card_values = {
    "1":11,"2": 2, "3":3, "4":4, "5":5, "6" :6, "7":7, "8":8, "9":9, "10":10, "Jack":10, "Queen": 10, "King": 10
    }


def start_playing(deck):
    count = 0
    name = ""
    stop_card = ""
    list_of_players = list() #[]
    while not name == 'go':
        name = input("enter player name or type GO to play: ")
        list_of_players.append(Player(name)) if not name == "go" else "go"
    while True:
        print('='*120)
        print('\n'*3)
        print(f"Round number {count}")
        print('\n'*2)
        print('='*120)
        for player in list_of_players:
            stop_card = ""
            while not stop_card == "next":
                if len(deck.deck):
                    get_card = deck.deck.pop()
                    deck.print_card(get_card)
                    player.sumoftwo(card_values[str(get_card.value)]) # we do STR() because the key is in "" from card_values examp.
                    print(f"Player: {player.display_name().upper()} and his score:  {player.checkscore()}")
                    if player.checkscore() > 21:
                        print('*'*120)
                        print('\n')
                        print("You busted: ")
                        print('\n')
                        player.refresh_score()
                        break
                    stop_card = input("Type next to stop: ")
                else: 
                    deck.build_deck()
                    deck.shuffle()
            print("="*120)
        count += 1
        max = list_of_players[0].checkscore()  
        winner_name = list_of_players[0]        
        for i in range(len(list_of_players)):
            if list_of_players[i].checkscore() > max:
                max = list_of_players[i].checkscore()
                winner_name = list_of_players[i]
            list_of_players[i].refresh_score()
        print('\n'*3)
        print(f"Congratulation: {winner_name.display_name()} win")
        print('\n'*3)
        
d1 = Deck()
d1.build_deck()
d1.shuffle()
start_playing(d1)