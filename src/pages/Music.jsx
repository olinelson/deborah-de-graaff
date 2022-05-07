import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { AlbumContainer } from "../components/StyledComponents";
import { BASE_URL } from "../config";

export default function Music() {
  return (
    <Container>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />

      <AlbumContainer>
        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3085852616/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
          seamless
        >
          <a href="https://deborahdegraaff.bandcamp.com/album/de-graaff-yau">
            de Graaff &amp; Yau by Deborah de Graff, Alexander Yau
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2618026723/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://deborahdegraaff.bandcamp.com/album/rags-bags-and-tangos">
            Rags, Bags And Tangos by Deborah de Graaff, Tonya Lemoh
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3497192731/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://deborahdegraaff.bandcamp.com/album/ulpirra">
            Ulpirra by Deborah de Graaff
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=229050973/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://thepowerofthree.bandcamp.com/album/never-leave-home-again">
            Never Leave Home Again by The Power of Three
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1089743853/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://deborahdegraaff.bandcamp.com/album/deborah-de-graaff-a-clarinet-collection">
            Deborah de Graaff - A Clarinet Collection by Deborah de Graaff -
            Clarinet, Len Vorster - Piano
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1199847633/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/"
          seamless=""
        >
          <a href="http://deborahdegraaff.bandcamp.com/album/enchanted-winds-i">
            Enchanted Winds I by Leah Lock - Flute, Deborah de Graaff -
            Clarinet, Kris Spike - Piano Composer
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1523091988/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/"
          seamless=""
        >
          <a href="http://deborahdegraaff.bandcamp.com/album/enchanted-winds-ii-a-time-for-passion">
            Enchanted Winds II - A Time for Passion by Leah Lock, Deborah de
            Graaff, Elisabeth Mitchelmore, Sally-Ann Russell, Kristofer Spike
          </a>
        </iframe>

        <iframe
          style={{ border: 0, width: "20rem", height: "20rem" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=4191921436/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://deborahdegraaff.bandcamp.com/album/brahms-complete-works-for-clarinet">
            Brahms Complete Works for Clarinet by Deborah de Graaff - clarinet,
            Len Vorster - piano, Georg Pedersen - Cello, Mozart Piano Quartet
          </a>
        </iframe>

        <img
          style={{ width: "20rem", height: "20rem" }}
          href="http://www.joshuatreemusic.com.au/"
          src={`${BASE_URL}images/windEnergy.jpg`}
        />
        <img
          style={{ width: "20rem", height: "20rem" }}
          href="https://store.cdbaby.com/cd/strahan2"
          src={`${BASE_URL}images/RoseOfTheBay.jpg`}
        />
        <img
          style={{ width: "20rem", height: "20rem" }}
          href="http://staging-naxos.aws.naxos.com/catalogue/item.asp?item_code=8.557324"
          src={`${BASE_URL}images/lennox.jpg`}
        />
        <img
          style={{ width: "20rem", height: "20rem" }}
          href="http://www.arkivmusic.com/classical/Name/Arcadia-Lane-Orchestra/Ensemble/164473-4"
          src={`${BASE_URL}images/cherryRipe.jpg`}
        />
      </AlbumContainer>
    </Container>
  );
}
