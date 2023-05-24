const jsonFile = "./utils/songs.json";
const songsContainer = document.querySelector(".songs");
const songTemplate = document.getElementById("song-template").content;

function createSong(id, title, artist, albumImage) {
	const newSong = songTemplate.cloneNode(true);

	const songInfo = newSong.querySelector(".song-info");
	songInfo.id = id;

	const songImg = newSong.querySelector(".song-image");
	songImg.src = albumImage;
	songImg.alt = title;
	//songImg.addEventListener("click", handleOpenPhoto);

	const songTitle = newSong.querySelector(".song-title");
	songTitle.textContent = title;

	const songArtist = newSong.querySelector(".song-artist");
	songArtist.textContent = artist;

	return newSong;
}

fetch(jsonFile)
	.then((res) => res.json())
	.then((data) => {
		data.forEach((song) => {
			console.log(song);
			const songTitle = document.createElement("div");
			songTitle.textContent = song.title;
			songsContainer.appendChild(
				createSong(song.id, song.title, song.artist, song.albumImage)
			);
		});
	});
