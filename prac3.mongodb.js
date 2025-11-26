use("Peliculas");

db["4 fantasticos"].deleteOne({nombre:"Comic: Los 4 Fantásticos Vol. 2"});
db["4 fantasticos"].deleteOne({nombre:"Comic: Los 4 Fantásticos Vol. 3"});

db.Intellestelar.deleteOne({nombre:"Tenet"});
db.Intellestelar.deleteOne({nombre:"Insomnia"});

db["Iron-Man"].deleteOne({nombre: "Comic: Iron Man Vol. 4"});
db["Iron-Man"].deleteOne({nombre: "Comic: Iron Man Vol. 5"});

db.MIB.deleteOne({nombre: "Comic: Hombres de Negro Vol. 6"});
db.MIB.deleteOne({nombre: "Comic: Hombres de Negro Vol. 5"});

db.Avengers.deleteOne({nombre:"Comic: Los Vengadores Vol. 4"});
db.Avengers.deleteOne({nombre:"Comic: Los Vengadores Vol. 3"});