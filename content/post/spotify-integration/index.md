---
title: "Spotify Integration"
date: 2018-03-18T22:50:00+01:00
spotify: "spotify:user:spotify:playlist:37i9dQZF1DX7KNKjOK0o75"
draft: false
resources:
- src: "*/spotify-button.png"
  name: button
- src: "*/spotify-access-rights.png"
  name: access
---
Am Wochenende hatte ich etwas Zeit mich mit der [Spotify Web API](https://developer.spotify.com/web-api/) auseinander zu setzen. Aber warum eigentlich?
<!--more-->

## Die Idee
Die Idee ist ganz einfach: Beim Schreiben generell oder eben für den Blog höre ich sehr oft nebenbei Musik. Ihr auch? Da ich sehr musikalisch “getrieben” bin beeinflusst das meine Wortwahl, meine Texte und damit auch die letztendlichen Texte. Wie cool wäre es, wenn ihr beim Lesen, sofern ihr wollt, genau die gleiche Musik im Hintergrund mithören könntet? Und genau das war die Idee dahinter mir die API genauer anzuschauen. D.h. wann immer ich in Zukunft über verschiedene Themen schreiben werde und eine entsprechende Spotify-Playlist mit dem Posting verlinke, so könnt ihr mit einem Knopfdruck reinhören. Evtl. wird niemand von euch dieses “Feature” nutzen, aber ich wollte wissen, wie und ob es funktioniert. Auch auf technischer Seite. Und wenn dabei mehr (sinnlose?) Funktionalität für meinen Blog dabei herauskommt, umso besser oder? 😭

## Funktionsweise
Um über euren Spotifyplayer “bestimmen” zu können, musste ich natürlich eine “App” namens andi1984.de für den Zugriff der Spotify API registrieren.

{{<imgproc button Resize "684x" >}}
Der neue Play-Button mit Spotify Integration auf andi1984.de.
{{</imgproc>}}

Wenn ihr das erste Mal auf den Play-Button klickt, werdet ihr in einem Popup darüber informiert dass “andi1984.de” sich mit eurem Spotify Konto mit einer einzigen Berechtigung verknüpfen möchte:
- "Control playback…" bedeutet, dass ich sofern ihr auf den Button klickt auch möchte, dass Spotify automatisch die meine Blogpost Musik automatisch abspielt. Dies geht nur, wenn ich eure Wiedergabe “kontrollieren” darf.

{{<imgproc access Resize "684x" >}}
Screenshot der Authorisierung die zum Abspielen angefordert werden. (Stand: 18. März 2018) 
{{</imgproc>}}

Sofern ihr den Bestimmungen zustimmt, die ihr übrigens jederzeit wieder unter https://www.spotify.com/us/account/apps/ jederzeit widerrufen könnt, wird mir zunächst ein sogenannter _authorization code_ zurückgegeben. Dieser ist als solcher zum Abspielen wertlos. Es muss zunächst mit Hilfe dieses Codes ein eigentlicher Access Token erstellt werden. Mehr zum Thema Authorisierung könnt ihr [hier](https://beta.developer.spotify.com/documentation/general/guides/authorization-guide/) nachlesen.

Die Generierung dieses Access Tokens ist aus [CORS](https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing) Gründen nicht im Browser möglich. Zumindest war es in meinen Versuchen daran gescheitert, wozu ich eine kleine Node-Applikation via [Heroku](http://www.heroku.com) auf Basis von [diesem GitHub Repo](https://github.com/andi1984/node-spotify-token-swap) erstellt habe über welche der zweite Handshake mit Spotify vonstattengeht. Dieser liefert mir den eigentlichen Access Token über welchen ich letztenendes euren Spotify-Client dazu bringen kann ein bestimmtes Lied oder eine bestimmte Playlist abzuspielen. 😈

Alles ziemlich kompliziert, aber wenn diese beiden Handshakes über die Bühne gebracht wurden, so sollte sich das Popup wieder schließen und die Playlist abgespielt werden. Während des kompletten Prozesses werden aber zu keinem Zeitpunkt auf meiner Seite Daten von euch in irgendwelchen Datenbanken abgespeichert! Lediglich die finalen Access Token Daten speichere ich und zwar im sogenannten [SessionStorage](https://developer.mozilla.org/de/docs/Web/API/Window/sessionStorage) in eurem Browser. D.h. wenn ihr diesen manuell löscht oder die Session beendet ist, dann sind auch die Infos über den Access Token gelöscht und ihr werdet beim nächsten Klick auf den Play-Button erneut ein Popup sehen.

## Wie geht es weiter?
Ich werde nun verschiedene, bereits geschriebene Blogposts mit einer Playlist ausstatten, sodass ihr in nächster Zukunft in immer mehr Blogposts den Button zu Gesicht bekommen solltet. Für mich hat sich das Experiment, denn nichts anderes war es bis hierhin, schon gelohnt. Aber das I-Tüpfelchen wäre natürlich, wenn der/die ein oder andere von euch das Feature auch in Zukunft nutzen wird. Ich bin gespannt. Sagt mir was ihr darüber denkt oder ob ihr vielleicht sogar schon einen andere Blog kennt der auf so eine sch…öne Idee kam 😊

Und nun wünsche ich euch viel Spaß beim Lesen meiner Blogposts mit Hintergrundmusik 💃

Liebe Grüße,
euer Andi
