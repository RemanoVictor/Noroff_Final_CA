import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div className="[ container ]">
        <div className="[ row ][ aboutWelcome ]">
          <div className="[ col-sm-12 ]">
            <h1> ABOUT </h1>
          </div>
        </div>
        <div className="[ about-content ]">
          <div className="row">
            <div className="col-sm-12">
              <Accordion>
                <Card>
                  <Card.Header>
                    <p>
                      Magic: The Gathering (colloquially known as Magic cards,
                      Magic or just MTG) is a collectible and digital
                      collectible card game created by Richard Garfield.
                      Released in 1993 by Wizards of the Coast (now a subsidiary
                      of Hasbro), Magic was the first trading card game and has
                      approximately twenty million players as of 2015, and over
                      twenty billion Magic cards produced in the period from
                      2008 to 2016, during which time it grew in popularity.
                    </p>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="0"
                      className="toggle"
                    >
                      Read More:
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p>
                        Each game of Magic represents a battle between wizards
                        known as planeswalkers who cast spells, use artifacts,
                        and summon creatures as depicted on individual cards in
                        order to defeat their opponents, typically, but not
                        always, by draining them of their 20 starting life
                        points in the standard format. Although the original
                        concept of the game drew heavily from the motifs of
                        traditional fantasy role-playing games such as Dungeons
                        and Dragons, the gameplay bears little similarity to
                        pencil-and-paper adventure games, while simultaneously
                        having substantially more cards and more complex rules
                        than many other card games.
                      </p>
                      <p>
                        Magic can be played by two or more players, either in
                        person with printed cards or on a computer, smartphone
                        or tablet with virtual cards through the Internet-based
                        software Magic: The Gathering Online or other video
                        games such as Magic: The Gathering Arena. It can be
                        played in various rule formats, which fall into two
                        categories: constructed and limited. Limited formats
                        involve players building a deck spontaneously out of a
                        pool of random cards with a minimum deck size of 40
                        cards; in constructed formats, players create decks from
                        cards they own, usually with a minimum of 60 cards per
                        deck.
                      </p>
                      <p>
                        New cards are released on a regular basis through
                        expansion sets. An organized tournament system (the DCI)
                        played at the international level and a worldwide
                        community of professional Magic players has developed,
                        as well as a substantial resale market for Magic cards.
                        Certain cards can be monetarily valuable due to their
                        rarity in production and utility in gameplay, with
                        prices ranging from a few cents to thousands of dollars.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
